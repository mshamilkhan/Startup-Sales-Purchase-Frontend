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
            <label>Startup name</label>
            <input type="text" placeholder="Type your startup name" />
          </div>
          <div className={styles.formGroup}>
            <label>Role Title</label>
            <input type="text" placeholder="Senior web developer" />
          </div>
        </div>


        <div className={styles.formGroup}>
        <label>Categories</label>
            <div className={styles.category}>
              <div className={styles.catg}>
                AI
              </div>
              <div className={styles.catg}>
                Cyber
              </div>
              <div className={styles.catg}>
                Ecommerce
              </div>
              <div className={styles.catg}>
                Finance
              </div>
              <div className={styles.catg}>
                Fitness
              </div>
              <div className={styles.catg}>
                Education
              </div>
              <div className={styles.catg}>
                Food
              </div>
              <div className={styles.catg}>
                Gaming
              </div>
              <div className={styles.catg}>
                Health Care
              </div>
              <div className={styles.catg}>
                legal
              </div>
              <div className={styles.catg}>
                Marketplace 
              </div>
              <div className={styles.catg}>
                Media
              </div>
              <div className={styles.catg}>
                Platform
              </div>
              <div className={styles.catg}>
                Real Estate
              </div>
              <div className={styles.catg}>
                Robotics
              </div>
              <div className={styles.catg}>
                Software
              </div>
              <div className={styles.catg}>
                Web3
              </div>
              <div className={styles.catg}>
                Crypto
              </div>
             
            </div>
  <label>Startup Description</label>
          <textarea placeholder="Write a description here" rows="4"></textarea>
          <label>Role description</label>
          <textarea placeholder="Write a role description here" rows="4"></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>Stage of your startup</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Idea Stage</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Building MVP</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> MVP Stage</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Product Market Fit</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Fund raising</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Growth</label>
            <label className={styles.checkboxlabel}><input type="checkbox" /> Exit</label>
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
