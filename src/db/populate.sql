DELETE FROM users_table;
INSERT INTO users_table (email)
VALUES ('diogo@dotme.com'),
    ('toino@dotme.com'),
    ('ruben@dotme.com'),
    ('rita@dotme.com');
INSERT INTO cv_table (
        userId,
        info_name,
        info_profilePicture,
        info_roles,
        info_bio,
        contacts_email,
        contacts_phone,
        contacts_github,
        contacts_linkedin,
        skills
    )
VALUES (
        'diogo@dotme.com',
        'Diogo Fernandes',
        '/diogo.png',
        '[
        "Vice-president @ NIAEFEUP",
        "Head of Program @ ENEI",
        "MSc in Computer Engineering @ FEUP"
    ]',
        '[
        {
            "type": "paragraph",
            "children": [
                {
                    "type": "text",
                    "text": "Diogo Fernandes is a Masters student in Informatics Engineering at FEUP, with hands-on experience in software development and leadership in student-driven initiatives."
                }
            ]
        },
        {
            "type": "paragraph",
            "children": [
                { "type": "text", "text": "As " },
                { "type": "text", "text": "Vice President", "bold": true },
                { "type": "text", "text": " of NIAEFEUP and " },
                { "type": "text", "text": "Head of Program", "bold": true },
                { "type": "text", "text": " for ENEI 2025, he has played key roles in organizing large-scale events and driving open-source projects." }
            ]
        },
        {
            "type": "paragraph",
            "children": [
                { "type": "text", "text": "His technical background includes building component libraries in " },
                { "type": "text", "text": "React", "bold": true },
                { "type": "text", "text": ", deploying with modern toolchains like " },
                { "type": "text", "text": "NPM", "bold": true },
                { "type": "text", "text": " and " },
                { "type": "text", "text": "Storybook", "bold": true },
                { "type": "text", "text": ", and managing team workflows using " },
                { "type": "text", "text": "Agile methodologies", "bold": true },
                { "type": "text", "text": "." }
            ]
        },
        {
            "type": "paragraph",
            "children": [
                {
                    "type": "text",
                    "text": "Diogo has also earned recognition at national hackathons and brings strong collaboration, communication, and problem-solving skills to every challenge he takes on."
                }
            ]
        }
    ]',
        'diogotvf7@gmail.com',
        '965358804',
        'github.com/diogotvf7',
        'linkedin.com/in/diogotv-fernandes',
        '[
        { "title": "C" },
        { "title": "C++" },
        { "title": "Dart" },
        { "title": "Haskell" },
        { "title": "Java" },
        { "title": "Javascript" },
        { "title": "PHP" },
        { "title": "Prolog" },
        { "title": "Python" },
        { "title": "Julia" },
        { "title": "Golang" },
        { "title": "Bootstrap" },
        { "title": "Figma" },
        { "title": "Flutter" },
        { "title": "Git" },
        { "title": "Laravel" },
        { "title": "MySQL" },
        { "title": "NPM" },
        { "title": "PostgreSQL" },
        { "title": "React" },
        { "title": "SQL" },
        { "title": "SQLite" },
        { "title": "Storybook" },
        { "title": "Tailwind" },
        { "title": "Typescript" },
        { "title": "Docker" }
    ]'
    );
INSERT INTO areas_table (cvId, name)
VALUES (1, "Experience");
INSERT INTO experiences_table (
        areaId,
        organization,
        description,
        location,
        roles,
        links
    )
VALUES (
        1,
        'NIAEFEUP',
        '[
      {
        "type": "paragraph",
        "children": [
          { "type": "text", "text": "NIAEFEUP is the " },
          { "type": "text", "text": "Informatics Student Group", "bold": true },
          { "type": "text", "text": " at the Faculty of Engineering of the University of Porto (" },
          { "type": "text", "text": "FEUP", "bold": true },
          { "type": "text", "text": "), dedicated to promoting " },
          { "type": "text", "text": "student development", "bold": true },
          { "type": "text", "text": " through " },
          { "type": "text", "text": "academic events", "bold": true },
          { "type": "text", "text": ", " },
          { "type": "text", "text": "workshops", "bold": true },
          { "type": "text", "text": ", and " },
          { "type": "text", "text": "open-source projects", "bold": true },
          { "type": "text", "text": "." }
        ]
      }
    ]',
        'Porto, Portugal',
        '[1, 2]',
        '[]'
    );
INSERT INTO portfolio_table (userId, type, foreignId, x, y, width, height)
VALUES ("diogo@dotme.com", "experience", "NIAEFEUP", 0, 1, 4, 4)
