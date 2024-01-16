"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose }) => {
  const [age, setAge] = useState(0);
  const router = useRouter()
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    gender: '',
    dob: '',
    resident: '',
    category: '',
    differentlyAbled: '',
    annualIncome: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add age to formData
    const queryObject = {
      gender: formData.gender,
      dob: formData.dob,
      resident: formData.resident === '' ? '' : formData.resident === 'no' ? 'out_of_delhi' : 'delhi',
      category: formData.category,
      differentlyAbled: formData.differentlyAbled === 'yes' ? true : formData.differentlyAbled === 'no' ? false : '',
      annualIncome: formData.annualIncome ? Number(formData.annualIncome) : null,
      age: age
    };

    const queryString = new URLSearchParams(queryObject).toString();

    // Use the query string in router.push
    router.push(`/search?${queryString}`);
  };

  const handleDateChange = (e) => {
    const dob = new Date(e.target.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    setAge(age)
    setFormData(prevState => ({ ...prevState, dob: e.target.value }));
  };


  return isOpen && (
    <div className="contrast-bg contrast-text relative" style={{ zIndex: 999 }} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="contrast-bg contrast-text fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="contrast-bg contrast-text fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="contrast-bg contrast-text flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="contrast-bg contrast-text relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg">

            {/* Form starts here */}
            <div className="contrast-bg contrast-text bg-white px-8 py-5 sm:p-6">
              <h3 className="contrast-bg contrast-text text-lg leading-6 font-medium text-gray-900">{t('modal_title')}</h3>
              <div className="contrast-bg contrast-text mt-5">
                <form onSubmit={handleSubmit} name='findSchemes'>
                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('gender_label')} <span className="contrast-bg contrast-text text-red-500">*</span></label>
                    <select onChange={handleInputChange} name='gender' className="contrast-bg contrast-text mt-1 pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value={"Male"}>{t('gender_option_male')}</option>
                      <option value={"Female"}>{t('gender_option_female')}</option>
                      <option value={"Others"}>{t('gender_option_others')}</option>
                    </select>
                  </div>

                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('date_of_birth_label')} <span className="contrast-bg contrast-text text-red-500">*</span></label>
                    <input type="date" className="contrast-bg contrast-text mt-1 pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleDateChange} />
                    {/* {age > 0 && <p className="contrast-bg contrast-text text-sm pt-2 text-gray-500" style={{ fontStyle: "italic" }}>You are {age} years old.</p>} */}
                  </div>

                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('resident_label')} <span className="contrast-bg contrast-text text-red-500">*</span></label>
                    <div className="contrast-bg contrast-text mt-2">
                      <label className="contrast-bg contrast-text inline-flex items-center">
                        <input onChange={handleInputChange} type="radio" name="resident" className="contrast-bg contrast-text form-radio" value="yes" />
                        <span className="contrast-bg contrast-text ml-2">{t('resident_yes')}</span>
                      </label>
                      <label className="contrast-bg contrast-text inline-flex items-center ml-6">
                        <input onChange={handleInputChange} type="radio" name="resident" className="contrast-bg contrast-text form-radio" value="no" />
                        <span className="contrast-bg contrast-text ml-2">{t('resident_no')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('category_label')}</label>
                    <select onChange={handleInputChange} name='reservation' className="contrast-bg contrast-text mt-1 pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">{t('category_option_select')}</option>
                      <option value="SC">{t('category_option_sc')}</option>
                      <option value="OBC">{t('category_option_obc')}</option>
                      <option value="ST">{t('category_option_st')}</option>
                      <option value="General">{t('category_option_general')}</option>
                      <option value="EBC">{t('category_option_ebc')}</option>
                      <option value="DNT">{t('category_option_dnt')}</option>
                      <option value="Minorities">{t('category_option_minorities')}</option>
                      <option value="Economically Weaker Section (EWS)">{t('category_option_ews')}</option>
                    </select>
                  </div>

                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('differently_abled_label')}</label>
                    <div className="contrast-bg contrast-text mt-2">
                      <label className="contrast-bg contrast-text inline-flex items-center">
                        <input onChange={handleInputChange} type="radio" name="differentlyAbled" className="contrast-bg contrast-text form-radio" value="yes" />
                        <span className="contrast-bg contrast-text ml-2">{t('resident_yes')}</span>
                      </label>
                      <label className="contrast-bg contrast-text inline-flex items-center ml-6">
                        <input onChange={handleInputChange} type="radio" name="differentlyAbled" className="contrast-bg contrast-text form-radio" value="no" />
                        <span className="contrast-bg contrast-text ml-2">{t('resident_no')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="contrast-bg contrast-text mb-6">
                    <label className="contrast-bg contrast-text block text-sm font-medium text-gray-700">{t('annual_income_label')}</label>
                    <div className="contrast-bg contrast-text mt-1 relative rounded-md shadow-sm">
                      <div className="contrast-bg contrast-text absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="contrast-bg contrast-text text-gray-500 sm:text-sm">₹</span>
                      </div>
                      <input onChange={handleInputChange} type="number" name='annualIncome' className="contrast-bg contrast-text pl-7 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="contrast-bg contrast-text bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="submit" className="contrast-bg contrast-text inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">{t('search_button')}</button>
                    <button type="button" onClick={onClose} className="contrast-bg contrast-text mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">{t('cancel_button')}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;