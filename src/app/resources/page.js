// pages/AllAssistance.js
"use client"

import Accordion from "@/components/accordion";
import { useTranslation } from "react-i18next";

export default function ResourcesInformatio() {
  const { t, i18n } = useTranslation();

  const data = [
    {
      resource: t('helplineNumbers'),
      information: t('helplineDetails')
    },
    {
      resource: t('childLegislationTitle'),
      information: (
        <div dangerouslySetInnerHTML={{
          __html: i18n.language == 'en' ? `
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
        ` : `<div>
        <h3>बाल संबंधित विधान और दिशा-निर्देश:</h3>
        <ol>
          <li><strong>किशोर न्याय अधिनियम (बच्चों की देखभाल और संरक्षण) अधिनियम, 2015 और मॉडल नियम, 2016</strong> - <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2148?sam_handle=123456789/1362">भारतीय कोड: किशोर न्याय अधिनियम, 2015</a>.</li>
          <li><strong>बच्चों से यौन अपराधों से सुरक्षा अधिनियम, 2012</strong> - भारतीय कोड: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2079?sam_handle=123456789/1362">बच्चों से यौन अपराधों से सुरक्षा अधिनियम, 2012</a>.</li>
          <li><strong>बाल और किशोर श्रम (निषेध और विनियमन) अधिनियम, 1986</strong> - भारतीय कोड: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/1848?sam_handle=123456789/1362">बाल और किशोर श्रम अधिनियम, 1986</a>.</li>
          <li><strong>बाल विवाह निषेध अधिनियम, 2006</strong> - भारतीय कोड: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2055?view_type=search&sam_handle=123456789/1362">बाल विवाह निषेध अधिनियम, 2006</a>.</li>
          <li><strong>बच्चों को मुफ्त और अनिवार्य शिक्षा का अधिकार अधिनियम, 2009</strong> - भारतीय कोड: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2086?sam_handle=123456789/1362">बच्चों को मुफ्त और अनिवार्य शिक्षा का अधिकार अधिनियम, 2009</a>.</li>
          <li><strong>बाल अधिकार संरक्षण आयोग अधिनियम, 2005</strong> - भारतीय कोड: <a class="text-blue-400" href="https://www.indiacode.nic.in/handle/123456789/2056?sam_handle=123456789/1362">बाल अधिकार संरक्षण आयोग अधिनियम, 2005</a>.</li>
          <li><strong>मिशन वात्सल्य के लिए दिशानिर्देश</strong> - <a class="text-blue-400" href="https://wcd.nic.in/acts/guidelines-mission-vatsalya">मिशन वात्सल्य | महिला एवं बाल विकास मंत्रालय के दिशानिर्देश</a>.</li>
          <li><strong>समेकित बाल विकास सेवाएं (ICDS) के दिशानिर्देश</strong></li>
          <li><strong>मिशन शक्ति आंगनवाड़ी और पोषण 2.0 के लिए दिशानिर्देश</strong> - <a class="text-blue-400" href="https://wcd.nic.in/sites/default/files/Final_Saksham_Anganwadi_and_Mission_2.0_guidelines_July_29_2022.pdf">साक्षम आंगनवाड़ी और मिशन 2.0 के अंतिम दिशानिर्देश - जुलाई 29, 2022</a>.</li>
          </ol>
        </div>`}} />
      )
    },
    {
      resource: t('importantWebsite'),
      information: (
        <div dangerouslySetInnerHTML={{
          __html: i18n.language == 'en' ? `
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
        ` : `<div>
        <ol>
          <li><a class="text-blue-400" href="https://portal.delhi.gov.in">दिल्ली सरकार वेबसाइट</a>.</li>
          <li><a class="text-blue-400" href="https://wcd.delhi.gov.in">महिला और बाल विकास विभाग वेबसाइट</a>.</li>
          <li><a class="text-blue-400" href="https://dcpcr.delhi.gov.in/">दिल्ली बाल अधिकार संरक्षण आयोग वेबसाइट</a>.</li>
          <li><a class="text-blue-400" href="http://cara.nic.in/">कारा वेबसाइट</a>.</li>
          <li><a class="text-blue-400" href="http://jjcdhc.nic.in/">दिल्ली उच्च न्यायालय की किशोर न्याय समिति वेबसाइट</a></li>
          <li><a class="text-blue-400" href="http://spuwac.com/">महिला और बाल विशेष पुलिस इकाई (SPUWAC)</a></li>
          <li><a class="text-blue-400" href="https://dslsa.org/">दिल्ली राज्य विधिक सेवा प्राधिकरण</a></li>
        </ol>
      </div>`}} />
      )
    },
    {
      resource: t('accessibilityHandbook'),
      information: i18n.language == 'en' ? <>
        For english version click here - <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=share_link" target="_blank" rel="noopener noreferrer">View</a>
        <br />
        For hindi version click here - <a className="dangerous-html-link" href="https://drive.google.com/file/d/1ULeiHbuS6H5fUFqoIAbcNLBSAqy3h2m3/view?usp=share_link" target="_blank" rel="noopener noreferrer">View</a>
        <br />
        For audio book click - <a className="dangerous-html-link" href="https://drive.google.com/drive/folders/1FhyfR_BivDbBuTBzBUDWAAhemc2cmc12" target="_blank" rel="noopener noreferrer">View</a>
      </> : <>
        अंग्रेजी संस्करण के लिए यहां क्लिक करें - <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=share_link" target="_blank" rel="noopener noreferrer">देखें</a>
        <br />
        हिंदी संस्करण के लिए यहां क्लिक करें - <a className="dangerous-html-link" href="https://drive.google.com/file/d/1ULeiHbuS6H5fUFqoIAbcNLBSAqy3h2m3/view?usp=share_link" target="_blank" rel="noopener noreferrer">देखें</a>
        <br />
        ऑडियो बुक के लिए यहां क्लिक करें - <a className="dangerous-html-link" href="https://drive.google.com/drive/folders/1FhyfR_BivDbBuTBzBUDWAAhemc2cmc12" target="_blank" rel="noopener noreferrer">देखें</a>
      </>
    },
    {
      resource: t('welfareActs'),
      information: i18n.language == 'en' ? <>
        Act & Rule for the Welfare of Persons with Disabilities, National Trust Act, Delhi RPwD Rules - <a className="dangerous-html-link" href="https://socialwelfare.delhi.gov.in/social/acts-rule-welfare-persons-disabilities" target="_blank" rel="noopener noreferrer">View</a>
      </> : <>
        विकलांग व्यक्तियों के कल्याण के लिए अधिनियम और नियम, राष्ट्रीय ट्रस्ट अधिनियम, दिल्ली RPwD नियम - <a className="dangerous-html-link" href="https://socialwelfare.delhi.gov.in/social/acts-rule-welfare-persons-disabilities" target="_blank" rel="noopener noreferrer">देखें</a>
      </>
    },
    {
      resource: t('grievanceRedressal'),
      information: <>
        <a href="https://drive.google.com/file/d/1o6zX7x4lVv55O-qgXYeC8uYN9jhNZSXY/view?usp=share_link" target="_blank" rel="noopener noreferrer">{t('view')}</a>
      </>
    },
    {
      resource: t('repositoryOfInstitutions'),
      information: i18n.language == 'en' ? <>
        1. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1vZBlV75VlGn1dL8884PvrNt3K50AY3D-/view?usp=share_link" target="_blank" rel="noopener noreferrer">Institutions and Special Schools for the Welfare of Persons with Disabilities (Page 43 of Handbook)</a>
        <br />
        2. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1CXBzxu4FamL32jk_KkQNQel_sVf6aOxS/view?usp=share_link" target="_blank" rel="noopener noreferrer">Disability - wise Medical Authorities for issuance of disability certificate (Page 59 of Handbook)</a>
        <br />
        3. <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">List of NGOs Registered under section 52 of PWD Act 1995 (Page 85 of Handbook) Link to handbook</a>
      </> : <>
        1. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1vZBlV75VlGn1dL8884PvrNt3K50AY3D-/view?usp=share_link" target="_blank" rel="noopener noreferrer">विकलांग व्यक्तियों के कल्याण के लिए संस्थान और विशेष स्कूल (हैंडबुक के पृष्ठ 43)</a>
        <br />
        2. <a className="dangerous-html-link" href="https://drive.google.com/file/d/1CXBzxu4FamL32jk_KkQNQel_sVf6aOxS/view?usp=share_link" target="_blank" rel="noopener noreferrer">विकलांगता प्रमाणपत्र जारी करने के लिए विकलांगता-वार चिकित्सा प्राधिकरण (हैंडबुक के पृष्ठ 59)</a>
        <br />
        3. <a className="dangerous-html-link" href="https://drive.google.com/file/d/11HrKH-2hXESA5Vnd8WcH9Z3unfkuWw_Z/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">PWD अधिनियम 1995 की धारा 52 के तहत पंजीकृत एनजीओ की सूची (हैंडबुक के पृष्ठ 85) हैंडबुक के लिए लिंक</a>
      </>
    },
    {
      resource: t('mcdSchools'),
      information: <><a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=t5PRKC9ILXruG7UivWYTAg==" target="_blank" rel="noopener noreferrer">{t('viewList')} 1</a><br /><a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=7nt/YqWsGPyGj3AOgCiCrLYR9/hJMh+cHN5ryz9gZxQ=" target="_blank" rel="noopener noreferrer">{t('viewList')} 2</a></>
    },
    {
      resource: t('ndmcSchools'),
      information: <a href="https://ndmc.gov.in/departments/education_school.aspx" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('govtSchools'),
      information: <a href="https://www.edudel.nic.in/mis/eis/frmSchoolList.aspx?type=8v6AC39/z0ySjVIkvfDJzvxkdDvmSsz7pgALKMjL3UI=" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('hospitals'),
      information: <a href="https://health.delhi.gov.in/health/delhi-govt-hospital" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('hospitalsGeneral'),
      information: <a href="https://delhi.gov.in/page/hospitals-delhi" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('policeStations'),
      information: <a href="https://delhipolice.gov.in/telephonedirectory" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('govtSchoolsAdditional'),
      information: <a href="https://lookerstudio.google.com/u/0/reporting/48c94ee6-7c2e-417b-b5e4-23382f61e69c/page/p_yllgqs6g2c" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('dmsSdms'),
      information: <table class="min-w-full table-auto border-collapse border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b border-gray-200 text-gray-700 text-left">{t('district')}</th>
            <th class="px-4 py-2 border-b border-gray-200 text-gray-700 text-left">{t('link')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t("SOUTH")}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsouth.delhi.gov.in/about-district/contact-district/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('CENTRAL')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dccentral.delhi.gov.in/en/dccentral/contact-us" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('NORTH')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnorth.delhi.gov.in/directory/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('SOUTH_WEST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsouthwest.delhi.gov.in/directory/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('NORTH_WEST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnorthwest.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('NORTH_WEST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dcwestrev.delhi.gov.in/dcwestrev/organisational-setup" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('EAST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmeast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('SOUTH_EAST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmsoutheast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('NORTH_EAST')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmnortheast.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b border-gray-200">{t('SHAHDARA')}</td>
            <td class="px-4 py-2 border-b border-gray-200"><a href="https://dmshahdara.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2">{t('NEW_DELHI')}</td>
            <td class="px-4 py-2"><a href="https://dmnewdelhi.delhi.gov.in/about-district/whos-who/" class="text-blue-600 hover:text-blue-800">{t('visit')}</a></td>
          </tr>
        </tbody>
      </table>
    },
    {
      resource: t('jjbs'),
      information: <a href="http://jjcdhc.nic.in/?page_id=14" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('ddes'),
      information: <a href="https://www.edudel.nic.in/mis/mismail/frmComposeMailDirectory.aspx" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('cwcs'),
      information: <a href="http://jjcdhc.nic.in/?page_id=16" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('dcpus'),
      information: <a href="http://jjcdhc.nic.in/?page_id=18" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('ccis'),
      information: <><a href="https://wcd.delhi.gov.in/sites/default/files/WCD/generic_multiple_files/list_of_child_care_institutions_run_by_nogs_0.pdf" target="_blank" rel="noopener noreferrer">{t('viewList')} 1</a><br /><a href="https://wcd.delhi.gov.in/sites/default/files/WCD/generic_multiple_files/govt_run.pdf" target="_blank" rel="noopener noreferrer">{t('viewList')} 2</a></>
    },
    {
      resource: t('sjpus'),
      information: <a href="http://jjcdhc.nic.in/?page_id=20" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('anganwadis'),
      information: <a href="https://lookerstudio.google.com/u/0/reporting/2949d73b-9129-4c32-af1a-5aa8988e6195/page/p_hmixlqwxwc" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('childlineCoordinators'),
      information: <a href="https://lookerstudio.google.com/u/0/reporting/39c0d592-8468-47f3-9f03-f7f1ddd9593a/page/p_dw1copo1vc" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('districtOfficers'),
      information: <>
        <a href="https://wcd.delhi.gov.in/wcd/contact-us" target="_blank" rel="noopener noreferrer">{t('viewList')} 1</a><br />
        <a href="https://jjcdhc.nic.in/?page_id=18" target="_blank" rel="noopener noreferrer">{t('viewList')} 2</a>
      </>
    },
    {
      resource: t('protectionOfficers'),
      information: <a href="​https://wcd.delhi.gov.in/wcd/list-protection-officers" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('familyCounselingCentres'),
      information: <a href="https://wcd.delhi.gov.in/wcd/list-family-counseling-centres" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('mcdOffices'),
      information: <a href="https://mcdonline.nic.in/portal/zones;jsessionid=A46E2DCC30D1A98841DBBBE8911E0699.np1#home" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('tehsildars'),
      information: <a href="https://revenue.delhi.gov.in/revenue/list-tehsildar-revenue-department" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('mohallaClinics'),
      information: <a href="https://dgehs.delhi.gov.in/dghs/aam-aadmi-mohalla-clinics" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
    },
    {
      resource: t('oneStopCentres'),
      information: <>
        <a href="https://dslsa.org/one-stop-centres" target="_blank" rel="noopener noreferrer">{t('viewList')}</a><br />
        <a href="https://jjcdhc.nic.in/?page_id=198" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
      </>
    },
    {
      resource: t('commonServiceCentres'),
      information: <a href="https://www.apnacsconline.in/csc-locator/delhi/delhi-672" target="_blank" rel="noopener noreferrer">{t('viewList')}</a>
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
            <h1 className="contrast-bg contrast-text text-2xl sm:text-2xl xl:text-4xl lg:text-4xl md:text-2xl font-bold text-white mb-4 pt-12">{t('resourcesBannerTitle')}</h1>
            <p className="contrast-bg contrast-text text-white">{t('resourcesBannerDescription')}</p>
          </div>
        </div>
      </div>
      <div className="contrast-bg contrast-text grid px-12 xl:px-0 lg:px-12 md:px-12 max-w-7xl mx-auto my-12 md:grid-cols-2 lg:grid-cols-1 gap-6">
        <Accordion  data={data} />
      </div>
    </>
  );
}
