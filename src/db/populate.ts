db.insert(usersTable).values({
  email: "diogo@dotme.com",
});

db.insert(cvTable).values({
  userId: "diogo@dotme.com",
  infoName: "Diogo Fernandes",
  infoProfilePicture: "/diogo.png",
  infoRoles: [
    "Vice-president @ NIAEFEUP",
    "Head of Program @ ENEI",
    "MSc in Computer Engineering @ FEUP",
  ],
  infoBio: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Diogo Fernandes is a Masters student in Informatics Engineering at FEUP, with hands-on experience in software development and leadership in student-driven initiatives.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        { type: "text", text: "As " },
        { type: "text", text: "Vice President", bold: true },
        { type: "text", text: " of NIAEFEUP and " },
        { type: "text", text: "Head of Program", bold: true },
        {
          type: "text",
          text: ", he has played key roles in organizing large-scale events and driving open-source projects.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ type: "text", text: "." }],
    },
  ],
  contactsEmail: "diogotvf7@gmail.com",
  contactsPhone: "965358804",
  contactsGithub: "github.com/diogotvf7",
  contactsLinkedin: "linkedin.com/in/diogotv-fernandes",
  areas: [
    {
      name: "Academic Experience",
      entries: [
        {
          organization: "NIAEFEUP",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "NIAEFEUP is a student association at FEUP, dedicated to promoting and supporting students in the field of Informatics Engineering.",
                },
              ],
            },
          ],
          location: "Porto, Portugal",
          roles: [
            {
              title: "Vice President",
              startDate: "2023-01-01",
              endDate: "Present",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Leading the association and overseeing its activities.",
                    },
                  ],
                },
              ],
            },
            {
              title: "Member of Program Department of SINF",
              startDate: "2022-01-01",
              endDate: "2022-12-31",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Responsible for organizing events and managing the program.",
                    },
                  ],
                },
              ],
            },
            {
              title: "BSc in Informatics Engineering and Computation",
              startDate: "2021-09-01",
              endDate: "2024-07-01",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Finished the BSc in Informatics Engineering and Computation with a 16.45/20 grade.",
                    },
                  ],
                },
              ],
            },
            {
              title: "MSc in Informatics Engineering and Computing",
              startDate: "2024-09-01",
              endDate: "2026-07-01",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Currently pursuing a MSc in Informatics Engineering. Current average: 16.45/20.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      links: [],
    },
    {
      name: "Professional Experience",
      entries: [
        {
          organization: "Kevel",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Kevel is a company that provides a platform for building custom ad servers.",
                },
              ],
            },
          ],
          location: "Porto, Portugal",
          roles: [
            {
              title: "Software Engineer Intern",
              startDate: "2023-06-01",
              endDate: "2023-09-01",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Worked on building a custom ad server using Node.js and React.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      links: [],
    },
    {
      name: "Achievements",
      entries: [
        {
          organization: "ShiftAppens",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "ShiftAppens is an Hackathon in Coimbra.",
                },
              ],
            },
          ],
          location: "Coimbra, Portugal",
          roles: [
            {
              title: "2nd Place",
              startDate: "2024-04-01",
              endDate: "2024-04-03",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Won 2nd place in the Hackathon.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      links: [],
    },
    {
      name: "Volunteering",
      entries: [
        {
          organization: "FEUP",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "FEUP is the Faculty of Engineering of the University of Porto.",
                },
              ],
            },
          ],
          location: "Porto, Portugal",
          roles: [
            {
              title: "Volunteer at MostraUP",
              startDate: "2022-01-01",
              endDate: "2022-12-31",
              description: [
                {
                  type: "paragraph",
                  children: [
                    {
                      type: "text",
                      text: "Mostra UP is an event that showcases the work of students and faculty at FEUP to middleschool students.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      links: [],
    },
  ],
  skills: [
    {
      title: "Chefe",
      level: 4
    }
  ]
});

db.insert(portfolioTable).values({
  userId: "diogo@dotme.com",
  type: "experience",
  foreignId: "NIAEFEUP",
  x:0,
  y:0,
  width:1,
  height:2,
})

db.insert(portfolioTable).values({
  userId: "diogo@dotme.com",
  type: "skill",
  foreignId: "Chefe",
  x:1,
  y:0,
  width:2,
  height:1,
})

db.insert(portfolioTable).values({
  userId: "diogo@dotme.com",
  type: "role",
  foreignId: "Software Engineer Intern",
  x:1,
  y:1,
  width:2,
  height:1,
})