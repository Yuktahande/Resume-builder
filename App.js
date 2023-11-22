import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    professionalSummary: '',
    education: '',
    academicSkills: '',
    nonAcademicSkills: '',
    careerObjective: '',
    experience: '',
    achievements: '',
  });

  const handleInputChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission, e.g., save data or navigate to a preview page.
    console.log('Resume Data:', resumeData);
  };

  return (
    <div className="app">
      <h1>Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="professionalSummary">Professional Summary:</label>
          <textarea
            id="professionalSummary"
            value={resumeData.professionalSummary}
            onChange={(e) => handleInputChange('professionalSummary', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education Qualifications:</label>
          <textarea
            id="education"
            value={resumeData.education}
            onChange={(e) => handleInputChange('education', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="academicSkills">Academic Skills:</label>
          <input
            id="academicSkills"
            type="text"
            value={resumeData.academicSkills}
            onChange={(e) => handleInputChange('academicSkills', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nonAcademicSkills">Non-Academic Skills:</label>
          <input
            id="nonAcademicSkills"
            type="text"
            value={resumeData.nonAcademicSkills}
            onChange={(e) => handleInputChange('nonAcademicSkills', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="careerObjective">Career Objective:</label>
          <textarea
            id="careerObjective"
            value={resumeData.careerObjective}
            onChange={(e) => handleInputChange('careerObjective', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience and Internships:</label>
          <textarea
            id="experience"
            value={resumeData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="achievements">Skills and Achievements:</label>
          <textarea
            id="achievements"
            value={resumeData.achievements}
            onChange={(e) => handleInputChange('achievements', e.target.value)}
          />
        </div>

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
};

export default App;