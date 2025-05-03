from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import subprocess
import os
import uuid
from jinja2 import Environment, FileSystemLoader
import subprocess
import os
import markdown
from weasyprint import HTML

from rich_text_parser import parse_cv_info

app = Flask(__name__)
CORS(app)
OUTPUT_DIR = "output"

os.makedirs(OUTPUT_DIR, exist_ok=True)




@app.route("/generate_pdf", methods=["POST"])
def generate_pdf():
    data = request.get_json()
    if not data:
        return {"error": "Invalid JSON"}, 400
    print(data)

    cv_info = data["cvData"]
    if not cv_info:
        print("No CV info")
        return {"error": "Invalid JSON"}, 400

    template_info = cv_info["template"]
    if not template_info:
        print("No template field")
        return {"error": "No template field"}, 400
    
    template_type = template_info["type"]
    template_file = template_info["id"] + "." + template_type

    cv_info = parse_cv_info(cv_info)
    
    # Create a Jinja2 environment
    env = Environment(loader=FileSystemLoader('templates'))
    template = env.get_template(template_file)

    populated_document = template.render(cv_info)

    # Create a temporary directory for the PDF file
    job_id = str(uuid.uuid4())
    temp_dir = f'/tmp/{job_id}'
    os.makedirs(temp_dir)

    # Convert HTML to PDF using WeasyPrint
    pdf_path = os.path.join(temp_dir, 'resume.pdf')
    
    match template_type:
        case "md":
            write_md(populated_document,pdf_path)
        case "html":
            write_html(populated_document,pdf_path)
    
    return send_file(pdf_path, as_attachment=True)



def write_md(doc, path):
    html_content = markdown.markdown(doc)

    styled_html = f"""
<html>
<head>
  <style>
  body {{
    font-family: 'Segoe UI', sans-serif;
    margin: 2em;
}}
h1, h2 {{
    color: #0000ff;
}}
em {{
    color: #cccccc;
}}
a {{
    color: #9cdcf2;
    text-decoration: none;
}}
hr {{
    border: none;
    height: 1px;
    background: #444;
    margin: 20px 0;
}}
  </style>
</head>
<body>{html_content}</body>
</html>
"""
    HTML(string=styled_html).write_pdf(path)

def write_html(doc,path):
    HTML(string=doc).write_pdf(path)

# IGNORAR DAQUI PARA A FRENTE





























    
@app.route("/test", methods=["POST"])
def test():
    data = request.get_json()
    if not data:
        return {'error': 'Invalid JSON'}, 400

    # Create temporary directory and file
    job_id = str(uuid.uuid4())
    tex_dir = f'/tmp/{job_id}'
    os.makedirs(tex_dir)
    tex_path = os.path.join(tex_dir, 'resume.tex')

    # Render template
    env = Environment(loader=FileSystemLoader('.'))
    template = env.get_template('template.tex')
    rendered = template.render(data)

    with open(tex_path, 'w') as f:
        f.write(rendered)

    # Compile to PDF
    subprocess.run(['pdflatex', '-output-directory', tex_dir, tex_path], check=True)

    pdf_path = os.path.join(tex_dir, 'resume.pdf')
    return send_file(pdf_path, as_attachment=True)

def compile_tex_to_pdf(tex_source, job_id):
    tex_filename = f"{job_id}.tex"
    tex_path = os.path.join(OUTPUT_DIR, tex_filename)

    with open(tex_path, "w") as f:
        f.write(tex_source)

    command = [
        "pdflatex",
        "-interaction=nonstopmode",
        "-output-directory", OUTPUT_DIR,
        tex_path
    ]

    try:
        subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        pdf_path = os.path.join(OUTPUT_DIR, f"{job_id}.pdf")
        return pdf_path
    except subprocess.CalledProcessError:
        return None

@app.route("/compile", methods=["POST"])
def compile_endpoint():
    tex_source = request.data.decode("utf-8")
    if not tex_source.strip():
        return jsonify({"error": "Empty LaTeX source"}), 400

    job_id = str(uuid.uuid4())

    pdf_path = compile_tex_to_pdf(tex_source, job_id)
    if pdf_path and os.path.exists(pdf_path):
        return send_file(pdf_path, as_attachment=True, download_name="document.pdf")
    else:
        return jsonify({"error": "Failed to compile LaTeX"}), 500
    




if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5050)
