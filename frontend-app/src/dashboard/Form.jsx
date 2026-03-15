import React, { useState } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titre: '',
    duree: '',
    Date: '',
    Ndesupport: '',
    category: '',
    technicien: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.titre) newErrors.titre = "Le titre est obligatoire";
    if (!formData.duree) newErrors.duree = "La durée est obligatoire";
    if (!formData.Date) newErrors.Date = "La date est obligatoire";
    if (!formData.Ndesupport) newErrors.Ndesupport = "Numéro de support obligatoire";
    if (!formData.category) newErrors.category = "Sélectionner une catégorie";
    if (!formData.technicien) newErrors.technicien = "Le nom du technicien est obligatoire";
  
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

  
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      const response = await axios.post('http://127.0.0.1:8000/ajouter', form);
      console.log(response.data.message);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.status === 422) {
        console.log(err.response.data.errors);
      } else {
        console.log(err.response?.data?.message || err.message);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Ajouter - Mon Application</title>
      </Helmet>
      <div className="position-relative text-center">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <form onSubmit={handleSubmit}>
            {/* Titre */}
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">Titre</label>
              <input
                type="text"
                name="titre"
                className={`form-control ${errors.titre ? 'is-invalid' : ''}`}
                id="titre"
                value={formData.titre}
                onChange={handleChange}
              />
              {errors.titre && <div className="invalid-feedback">{errors.titre}</div>}
            </div>

            {/* Durée */}
            <div className="mb-3">
              <label htmlFor="duree" className="form-label">Durée</label>
              <input
                type="time"
                name="duree"
                className={`form-control ${errors.duree ? 'is-invalid' : ''}`}
                id="duree"
                value={formData.duree}
                onChange={handleChange}
              />
              {errors.duree && <div className="invalid-feedback">{errors.duree}</div>}
            </div>

            {/* Date */}
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">Date</label>
              <input
                type="date"
                name="Date"
                className={`form-control ${errors.Date ? 'is-invalid' : ''}`}
                id="Date"
                value={formData.Date}
                onChange={handleChange}
              />
              {errors.Date && <div className="invalid-feedback">{errors.Date}</div>}
            </div>

            {/* Numéro de support */}
            <div className="mb-3">
              <label htmlFor="Ndesupport" className="form-label">Numéro de support</label>
              <input
                type="text"
                name="Ndesupport"
                className={`form-control ${errors.Ndesupport ? 'is-invalid' : ''}`}
                id="Ndesupport"
                value={formData.Ndesupport}
                onChange={handleChange}
              />
              {errors.Ndesupport && <div className="invalid-feedback">{errors.Ndesupport}</div>}
            </div>

            {/* Catégorie */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Catégorie</label>
              <select
                className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Sélectionner une catégorie</option>
                <option value="Musique tarifit">Musique tarifit</option>
                <option value="Emission culturelle">Emission culturelle</option>
                <option value="Emission RELIGIEUSE">Emission RELIGIEUSE</option>
                <option value="SERIE">SERIE</option>
              </select>
              {errors.category && <div className="invalid-feedback">{errors.category}</div>}
            </div>

            {/* Technicien */}
            <div className="mb-3">
              <label htmlFor="technicien" className="form-label">Technicien</label>
              <input
                type="text"
                name="technicien"
                className={`form-control ${errors.technicien ? 'is-invalid' : ''}`}
                id="technicien"
                value={formData.technicien}
                onChange={handleChange}
              />
              {errors.technicien && <div className="invalid-feedback">{errors.technicien}</div>}
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">Notes</label>
              <textarea
                className="form-control"
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
}
