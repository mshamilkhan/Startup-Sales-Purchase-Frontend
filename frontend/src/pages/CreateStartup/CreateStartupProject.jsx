import React from "react";
import styles from "./CreateStartupProject.module.css"; // Use CSS Module
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
const CreateStartupProject = () => {
  return (
    <>
    
    <Navbar/>
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Create Startup Project</h2>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Title</label>
            <input type="text" placeholder="Type your project name" />
          </div>
          <div className={styles.formGroup}>
            <label>Role Title</label>
            <input type="text" placeholder="Senior web developer" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea placeholder="Write a description here" rows="4"></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Stage of your startup</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Equity Split</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Equity Split</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Equity Split</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Equity Split</label>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Your field for Startup</label>
            <input type="text" placeholder="Ecommerce" />
          </div>
          <div className={styles.formGroup}>
            <label>Website URL (Optional)</label>
            <input type="url" placeholder="https://demowebsite.com" />
          </div>
        </div>

        {/* <div className={styles.formGroup}>
          <label>Questions (Optional)</label>
          <p className={styles.optionalText}>Why do you want to join this team? Some other question here?</p>
          <button type="button" className={styles.addBtn}>Add Question</button>
        </div> */}

        <div className={styles.actionButtons}>
          <button type="button" className={styles.cancelBtn}>Cancel</button>
          <button type="submit" className={styles.submitBtn}>Create Project</button>
        </div>
      </form>
    </div>

<Footer/>
    </>
  );
};

export default CreateStartupProject;
