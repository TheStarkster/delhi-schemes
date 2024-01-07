// pages/AllAssistance.js
"use client"

import Accordion from "@/components/accordion";

export default function ResourcesInformatio() {
  const data = [
    {
      resource: "Helpline Numbers",
      information: "Child Helpline: 1098, Women Helpline: 1091, Police: 112, Covid Helpline: 1075, DCPCR Helpline: 9311551393"
    },
    {
      resource: "Child related Legislations/ Guidelines",
      information: (
        <div dangerouslySetInnerHTML={{
          __html: `
          <div>
          <h3>Child-Related Legislations and Guidelines:</h3>
          <ol>
            <li><strong>Juvenile Justice Act (Care and Protection of Children) Act, 2015 and Model Rules, 2016</strong> - <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2148?sam_handle=123456789/1362">India Code: Juvenile Justice Act, 2015</a>.</li>
            <li><strong>Protection of Children from Sexual Offences Act, 2012</strong> - India Code: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2079?sam_handle=123456789/1362">Protection of Children from Sexual Offences Act, 2012</a>.</li>
            <li><strong>Child and Adolescent Labour (Prohibition and Regulation) Act, 1986</strong> - India Code: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/1848?sam_handle=123456789/1362">Child and Adolescent Labour Act, 1986</a>.</li>
            <li><strong>Prohibition of Child Marriage Act, 2006</strong> - India Code: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2055?view_type=search&sam_handle=123456789/1362">Prohibition of Child Marriage Act, 2006</a>.</li>
            <li><strong>Right of Children to Free and Compulsory Education Act, 2009</strong> - India Code: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2086?sam_handle=123456789/1362">Right of Children to Free and Compulsory Education Act, 2009.</a></li>
            <li><strong>Commissions for Protection of Child Rights Act, 2005</strong> - India Code: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2056?sam_handle=123456789/1362">Commissions for Protection of Child Rights Act, 2005.</a></li>
            <li><strong>Guidelines for Mission Vatsalya</strong> - <a class="text-blue-400" href="https://wcd.nic.in/acts/guidelines-mission-vatsalya">Guidelines of Mission Vatsalya | Ministry of Women & Child Development.</a></li>
            <li><strong>Integrated Child Development Services (ICDS) Guidelines</strong></li>
            <li><strong>Guidelines for Mission Shakti Anganwadi and Poshan 2.0</strong> - <a class="text-blue-400" href="https://wcd.nic.in/sites/default/files/Final_Saksham_Anganwadi_and_Mission_2.0_guidelines_July_29_2022.pdf">Final Saksham Anganwadi and Mission 2.0 Guidelines - July 29, 2022</a>.</li>
          </ol>
        </div>
        `}} />
      )
    },
    {
      resource: "Important Website",
      information: (
        <div dangerouslySetInnerHTML={{
          __html: `
          <div>
          <ol>
            <li><a class="text-blue-400" href="https://portal.delhi.gov.in">Delhi Government Website</a>.</li>
            <li><a class="text-blue-400" href="https://wcd.delhi.gov.in">Department of WCD Website</a>.</li>
            <li><a class="text-blue-400" href="https://dcpcr.delhi.gov.in/">Delhi Commission for Protection of Child Rights Website</a>.</li>
            <li><a class="text-blue-400" href="http://cara.nic.in/">CARA Website</a>.</li>
            <li><a class="text-blue-400" href="http://jjcdhc.nic.in/">Juvenile Justice Committee of Delhi High Court Website</a></li>
            <li><a class="text-blue-400" href="http://spuwac.com/">Special Police Unit for Women & Children (SPUWAC)</a></li>
            <li><a class="text-blue-400" href="https://dslsa.org/">Delhi State Legal Services Authority</a></li>
          </ol>
        </div>
        `}} />
      )
    },
    {
      resource: "Accessibility handbook on rights and entitlements of Person with Disabilities",
      information: <>
        For english version click here - <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=share_link" target="_blank" rel="noopener noreferrer">View</a>
        <br />
        For hindi version click here - <a className="dangerous-html-link" href="https://drive.google.com/file/d/1ULeiHbuS6H5fUFqoIAbcNLBSAqy3h2m3/view?usp=share_link" target="_blank" rel="noopener noreferrer">View</a>
        <br />
        For audio book click - <a className="dangerous-html-link" href="https://drive.google.com/drive/folders/1FhyfR_BivDbBuTBzBUDWAAhemc2cmc12" target="_blank" rel="noopener noreferrer">View</a>
      </>
    },
    {
      resource: "Acts & Rule for the Welfare of Persons with Disabilities",
      information: <>
        Act & Rule for the Welfare of Persons with Disabilities, National Trust Act, Delhi RPwD Rules - <a className="dangerous-html-link" href="https://socialwelfare.delhi.gov.in/social/acts-rule-welfare-persons-disabilities" target="_blank" rel="noopener noreferrer">View</a>
      </>
    },
    {
      resource: "Grievance Redressal Bodies",
      information: <>
        <a href="https://drive.google.com/file/d/1o6zX7x4lVv55O-qgXYeC8uYN9jhNZSXY/view?usp=share_link" target="_blank" rel="noopener noreferrer">View</a>
      </>
    },
    {
      resource: "Repository of Institutions for Disabled Persons",
      information: <>
        1. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1vZBlV75VlGn1dL8884PvrNt3K50AY3D-/view?usp=share_link" target="_blank" rel="noopener noreferrer">Institutions and Special Schools for the Welfare of Persons with Disabilities (Page 43 of Handbook)</a>
        <br />
        2. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1CXBzxu4FamL32jk_KkQNQel_sVf6aOxS/view?usp=share_link" target="_blank" rel="noopener noreferrer">Disability - wise Medical Authorities for issuance of disability certificate (Page 59 of Handbook)</a>
        <br />
        3. <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">List of NGOs Registered under section 52 of PWD Act 1995 (Page 85 of Handbook) Link to handbook</a>
      </>
    },
    {
      resource: "List of MCD Schools",
      information: <><a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=t5PRKC9ILXruG7UivWYTAg==" target="_blank" rel="noopener noreferrer">View List 1</a><br /><a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=7nt/YqWsGPyGj3AOgCiCrLYR9/hJMh+cHN5ryz9gZxQ=" target="_blank" rel="noopener noreferrer">View List 2</a></>
    },
    {
      resource: "List of NDMC Schools",
      information: <a href="https://ndmc.gov.in/departments/education_school.aspx" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Government Schools",
      information: <a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=8v6AC39/z0ySjVIkvfDJzvxkdDvmSsz7pgALKMjL3UI=" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Government Hospitals",
      information: <a href="https://health.delhi.gov.in/health/delhi-govt-hospital" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Hospitals",
      information: <a href="https://delhi.gov.in/page/hospitals-delhi" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Police Stations",
      information: <a href="https://delhipolice.gov.in/telephonedirectory" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Govt. Schools",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/48c94ee6-7c2e-417b-b5e4-23382f61e69c/page/p_yllgqs6g2c" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of DMs/SDMs",
      information: <table class="min-w-full table-auto border-collapse border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b border-gray-200 text-gray-700 text-left">District</th>
            <th class="px-4 py-2 border-b border-gray-200 text-gray-700 text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">SOUTH</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsouth.delhi.gov.in/about-district/contact-district/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">CENTRAL</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dccentral.delhi.gov.in/en/dccentral/contact-us" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">NORTH</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnorth.delhi.gov.in/directory/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">SOUTH WEST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsouthwest.delhi.gov.in/directory/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">NORTH WEST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnorthwest.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">WEST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dcwestrev.delhi.gov.in/dcwestrev/organisational-setup" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">EAST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmeast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">SOUTH EAST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsoutheast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">NORTH EAST</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnortheast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">SHAHDARA</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmshahdara.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2">NEW DELHI</td>
            <td class="px-4 py-2"><a href="https://dmnewdelhi.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">Visit</a></td>
          </tr>
        </tbody>
      </table>
    },
    {
      resource: "List of JJBs",
      information: <a href="http://jjcdhc.nic.in/?page_id=14" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of DDEs",
      information: <a href="https://www.edudel.nic.in/mis/mismail/frmComposeMailDirectory.aspx" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of CWCs",
      information: <a href="http://jjcdhc.nic.in/?page_id=16" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of DCPUs",
      information: <a href="http://jjcdhc.nic.in/?page_id=18" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of CCIs",
      information: <><a href="https://wcd.delhi.gov.in/sites/default/files/WCD/generic_multiple_files/list_of_child_care_institutions_run_by_nogs_0.pdf" target="_blank" rel="noopener noreferrer">View List 1</a><br /><a href="https://wcd.delhi.gov.in/sites/default/files/WCD/generic_multiple_files/govt_run.pdf" target="_blank" rel="noopener noreferrer">View List 2</a></>
    },
    {
      resource: "List of SJPUs",
      information: <a href="http://jjcdhc.nic.in/?page_id=20" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Anganwadis",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/2949d73b-9129-4c32-af1a-5aa8988e6195/page/p_hmixlqwxwc" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of childline coordinators",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/39c0d592-8468-47f3-9f03-f7f1ddd9593a/page/p_dw1copo1vc" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of District Officers (WCD)",
      information: <>
        <a href="https://wcd.delhi.gov.in/wcd/contact-us" target="_blank" rel="noopener noreferrer">View List 1</a><br />
        <a href="https://jjcdhc.nic.in/?page_id=18" target="_blank" rel="noopener noreferrer">View List 2</a>
      </>
    },
    {
      resource: "List of Protection Officers",
      information: <a href="​https://wcd.delhi.gov.in/wcd/list-protection-officers" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Family Counseling Centres",
      information: <a href="https://wcd.delhi.gov.in/wcd/list-family-counseling-centres" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of MCD Offices",
      information: <a href="https://mcdonline.nic.in/portal/zones;jsessionid=A46E2DCC30D1A98841DBBBE8911E0699.np1#home" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Tehsildars",
      information: <a href="https://revenue.delhi.gov.in/revenue/list-tehsildar-revenue-department" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Mohalla Clinics",
      information: <a href="https://dgehs.delhi.gov.in/dghs/aam-aadmi-mohalla-clinics" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of One Stop Centres",
      information: <>
        <a href="https://dslsa.org/one-stop-centres" target="_blank" rel="noopener noreferrer">View List</a><br />
        <a href="https://jjcdhc.nic.in/?page_id=198" target="_blank" rel="noopener noreferrer">View List</a>
      </>
    },
    {
      resource: "Common Service Centres",
      information: <a href="https://www.apnacsconline.in/csc-locator/delhi/delhi-672" target="_blank" rel="noopener noreferrer">View List</a>
    }
  ];
  return (
    <>
      <div className="contrast-bg contrast-text banner relative bg-cover bg-center" style={{ backgroundImage: `url('/resources.png')`, height: '300px' }}>
        {/* Overlay */}
        <div className="contrast-bg contrast-text overlay absolute inset-0" style={{ backgroundColor: "#072248", opacity: 0.9 }}></div>

        {/* Text over Overlay */}
        <div className="contrast-bg contrast-text relative z-10 px-12">
          <div className="contrast-bg contrast-text mx-auto max-w-7xl text-left">
            <h1 className="contrast-bg contrast-text text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">Essential Resources for Child Welfare and Safety</h1>
            <p className="contrast-bg contrast-text text-white">Access vital child protection resources — from emergency helplines to comprehensive child welfare legislation — in one concise, user-friendly platform.</p>
          </div>
        </div>
      </div>
      <div className="contrast-bg contrast-text grid px-12 xl:px-0 lg:px-12 md:px-12 max-w-7xl mx-auto my-12 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <Accordion data={data} />
      </div>
    </>
  );
}
