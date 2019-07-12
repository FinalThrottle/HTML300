const employee = [
  [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    },
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
    },
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "company": "Chicago Cubs",
      "experience": "12 years",
      "school": "USC",
      "major": "Pitching",
      "email": "kyleH@cubs.com",
      "linkedInUrl": "kyle.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Buls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
   ]
]

employee.map (function(el) {
  let employee =
    <article class="employee">
      <ul>
        <li class="employee_name">${el.name}</li>
        <li class="employee_jobTitle">${el.jobTitle}</li>
        <li class="employee_company">${el.company}</li>
        <li class="employee_experience">${el.experience}</li>
        <li class="employee_school">${el.school}</li>
        <li class="employee_major">${el.major}</li>
        <li class="employee_email">${el.email}</li>
        <li class="employee_linkedInUrl">${el.linkedInUrl}</li>
        <li class="employee_codeLanguages">${el.codeLanguages}</li>
        </ul>
    </article>
});

<article class="employee">
  <ul>
    <li class="employee_name">Steve Smith</li>
    <li class="employee_jobTitle">Project Manager</li>
    <li class="employee_company">Front End Dev Co</li>
    <li class="employee_experience">3 years</li>
    <li class="employee_school">UW</li>
    <li class="employee_major">Marketing</li>
    <li class="employee_email">steve@fedc.com</li>
    <li class="employee_linkedInUrl">steve.linkedinprofile.com</li>
    <li class="employee_codeLanguages">HTML, CSS, JavaScript, .NET, C#</li>
  </ul>
</article>
<article class="employee">
  <ul>
    <li class="employee_name">Aaron Katz</li>
    <li class="employee_jobTitle">Full Stack Developer</li>
    <li class="employee_company">Web Sites and More</li>
    <li class="employee_experience">5 years</li>
    <li class="employee_school">SU</li>
    <li class="employee_major">Computer Science</li>
    <li class="employee_email">aaronNotMyemail@uw.com</li>
    <li class="employee_linkedInUrl">aaron.linkedinprofile.com</li>
    <li class="employee_codeLanguages">HTML, CSS, JavaScript, PHP, Twig</li>
  </ul>
</article>
<article class="employee">
  <ul>
    <li class="employee_name">Kyle Hendricks</li>
    <li class="employee_jobTitle">Starting Pitcher</li>
    <li class="employee_company">Chicago Cubs</li>
    <li class="employee_experience">12 years</li>
    <li class="employee_school">USC</li>
    <li class="employee_major">Pitching</li>
    <li class="employee_email">kyleH@cubs.com</li>
    <li class="employee_linkedInUrl">kyle.linkedinprofile.com</li>
    <li class="employee_codeLanguages">HTML, CSS, JavaScript, Ruby, Rails</li>
  </ul>
</article>
<article class="employee">
  <ul>
    <li class="employee_name">Michael Jordan</li>
    <li class="employee_jobTitle">Point Guard</li>
    <li class="employee_company">Chicago Bulls</li>
    <li class="employee_experience">20 years</li>
    <li class="employee_school">UNC</li>
    <li class="employee_major">Trash Talking</li>
    <li class="employee_email">mJordan@bulls.com</li>
    <li class="employee_linkedInUrl">mJordas.linkedinprofile.com</li>
    <li class="employee_codeLanguages">HTML, CSS, JavaScript, Java, Spring</li>
  </ul>
</article>

//Using jQuery's append in order to add its argument as a single element to the end of a list.
$(".employee").append(employeeHTML);
