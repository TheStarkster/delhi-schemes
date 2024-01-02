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
      resource: "List of Police Stations",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/5b0a9fb6-9ad8-4613-8b55-059aa4ba9739/page/y6atC" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Govt. Schools",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/48c94ee6-7c2e-417b-b5e4-23382f61e69c/page/p_yllgqs6g2c" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Govt. Hospitals",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/8029cd6f-f62e-4862-98a5-f61364e11ed3/page/p_87w3odhevc" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of DMs/SDMs",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/1af9f683-446c-4605-b6c2-415b97cb5f97/page/p_43rcafwxwc" target="_blank" rel="noopener noreferrer">View List</a>
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
      information: <a href="https://lookerstudio.google.com/u/0/reporting/7c2ac3e1-0553-4c66-852a-db398765f645/page/p_0feylzhdvc" target="_blank" rel="noopener noreferrer">View List</a>
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
      resource: "MCD/NDMC/DCB Schools",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/835aec49-521b-49e4-84a0-054c2faa8249/page/p_rcbnl26g2c" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of childline coordinators",
      information: <a href="https://lookerstudio.google.com/u/0/reporting/39c0d592-8468-47f3-9f03-f7f1ddd9593a/page/p_dw1copo1vc" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of District Officers (WCD)",
      information: <a href="http://jjcdhc.nic.in/?page_id=18" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Child Development Project Officers (CDPO)",
      information: <a href="http://wcd.delhigovt.nic.in/list-child-development-project-officer-dept-women-and-child-development" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Protection Officers",
      information: <a href="http://wcd.delhigovt.nic.in/protection-officers" target="_blank" rel="noopener noreferrer">View List</a>
    },
    {
      resource: "List of Family Counseling Centres",
      information: <a href="http://wcd.delhigovt.nic.in/family-counselling-centres" target="_blank" rel="noopener noreferrer">View List</a>
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
      information: <a href="http://wcddel.in/pdf/OneStopCenterWEC_2021.pdf " target="_blank" rel="noopener noreferrer">View List</a>
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
