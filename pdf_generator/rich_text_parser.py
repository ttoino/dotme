from html import escape

def render_rich_text(nodes):
    html_output = ""

    for node in nodes:
        node_type = node.get("type")

        if node_type == "text":
            content = escape(node.get("text", ""))
            if node.get("bold"):
                content = f"<strong>{content}</strong>"
            if node.get("italic"):
                content = f"<em>{content}</em>"
            if node.get("underline"):
                content = f"<u>{content}</u>"
            html_output += content

        elif node_type == "link":
            href = escape(node.get("href", "#"))
            text = escape(node.get("text", ""))
            html_output += f'<a href="{href}" class="text-blue-600 underline">{text}</a>'

        elif node_type == "break":
            html_output += "<br>"

        elif node_type == "list":
            tag = "ol" if node.get("ordered") else "ul"
            html_output += f"<{tag} class='ml-5 list-disc'>"
            for item in node.get("items", []):
                html_output += f"<li>{render_rich_text(item)}</li>"
            html_output += f"</{tag}>"

        elif node_type == "paragraph":
            children = node.get("children", [])
            html_output += f"<p class='mb-3'>{render_rich_text(children)}</p>"

    return html_output

def parse_cv_info(cv_info):
    if cv_info["info"]["bio"]:
        cv_info["info"]["bio"] = render_rich_text(cv_info["info"]["bio"])
    if cv_info["areas"]:
        for a in range(len(cv_info["areas"])):
            for e in range(len(cv_info["areas"][a]["entries"])):
                if cv_info["areas"][a]["entries"][e]["description"]:
                    cv_info["areas"][a]["entries"][e]["description"] = render_rich_text(cv_info["areas"][a]["entries"][e]["description"])
                for r in range(len(cv_info["areas"][a]["entries"][e]["roles"])):
                    if cv_info["areas"][a]["entries"][e]["roles"][r]["description"]:
                        cv_info["areas"][a]["entries"][e]["roles"][r]["description"] = render_rich_text(cv_info["areas"][a]["entries"][e]["roles"][r]["description"])
    return cv_info
