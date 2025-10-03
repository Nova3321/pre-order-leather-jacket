import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const wilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
  'Blida', 'Bouïra', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Algiers',
  'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
  'Constantine', 'Médéa', 'Mostaganem', "M'Sila", 'Mascara', 'Ouargla', 'Oran', 'El Bayadh',
  'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued',
  'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent',
  'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès',
  'Ain Salah', 'Ain Guezzam', 'Touggourt', 'Djanet', "El M'Ghair", 'El Menia'
];

const colors = [
  { name: 'Noir', code: '#000000' },
  { name: 'Marron Foncé', code: '#5C4033' },
  { name: 'Bordeaux', code: '#8B0000' }
];

const FormSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    phone: '',
    taille: '',
    couleur: '',
    wilaya: ''
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleColorSelect = (colorName) => {
    setFormData({ ...formData, couleur: colorName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.section
      id="form"
      ref={ref}
      className="form-section"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <div className="sizes">
          <label>
            <input
              type="radio"
              name="taille"
              value="Taille 1"
              onChange={handleChange}
              required
            />
            Taille 1
          </label>
          <label>
            <input
              type="radio"
              name="taille"
              value="Taille 2"
              onChange={handleChange}
            />
            Taille 2
          </label>
          <label>
            <input
              type="radio"
              name="taille"
              value="Taille 3"
              onChange={handleChange}
            />
            Taille 3
          </label>
        </div>
        <div className="colors">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`color-icon ${formData.couleur === color.name ? 'selected' : ''}`}
              style={{ backgroundColor: color.code }}
              onClick={() => handleColorSelect(color.name)}
            />
          ))}
        </div>
        <select
          name="wilaya"
          value={formData.wilaya}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une wilaya</option>
          {wilayas.map((wilaya) => (
            <option key={wilaya} value={wilaya}>
              {wilaya}
            </option>
          ))}
        </select>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default FormSection;