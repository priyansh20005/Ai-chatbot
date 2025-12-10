// import './Footer.css';
// import {
//   FaHeartbeat,
//   FaShieldAlt,
//   FaUserMd,
//   FaPhoneAlt,
//   FaCalendarCheck,
//   FaGlobe,
//   FaLock,
//   FaRegClock,
//   FaCertificate,
//   FaStethoscope,
//   FaPills,
//   FaHospital,
//   FaClipboardCheck,
//   FaHeart
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="health-footer">
//       <div className="footer-content">
//         {/* Health Organization Badge */}
//         <div className="footer-health-badge">
//           <div className="health-badge-icon">
//             <FaHeartbeat />
//           </div>
//           <div className="health-badge-text">
//             <h3>Certified Health Information</h3>
//             <p>Verified by medical professionals</p>
//           </div>
//         </div>

//         {/* Core Information Grid */}
//         <div className="footer-info-grid">
//           <div className="info-card emergency-info">
//             <div className="info-icon">
//               <FaPhoneAlt />
//             </div>
//             <div className="info-content">
//               <h4>Emergency Contacts</h4>
//               <ul>
//                 <li>Medical Emergency: <strong>112 / 911</strong></li>
//                 <li>Mental Health: <strong>988</strong></li>
//                 <li>Poison Control: <strong>1-800-222-1222</strong></li>
//               </ul>
//             </div>
//           </div>

//           <div className="info-card availability-info">
//             <div className="info-icon">
//               <FaCalendarCheck />
//             </div>
//             <div className="info-content">
//               <h4>Availability</h4>
//               <ul>
//                 <li>24/7 Health Assistance</li>
//                 <li>Response Time: &lt; 2 seconds</li>
//                 <li>Multilingual Support</li>
//               </ul>
//             </div>
//           </div>

//           <div className="info-card coverage-info">
//             <div className="info-icon">
//               <FaStethoscope />
//             </div>
//             <div className="info-content">
//               <h4>Health Coverage</h4>
//               <ul>
//                 <li>General Medicine</li>
//                 <li>Mental Health & Wellness</li>
//                 <li>Nutrition & Diet</li>
//                 <li>Preventive Care</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Quality & Security Badges */}
//         <div className="footer-badges">
//           <div className="quality-badges">
//             <div className="badge">
//               <FaCertificate className="badge-icon" />
//               <span>WHO Guidelines Compliant</span>
//             </div>
//             <div className="badge">
//               <FaClipboardCheck className="badge-icon" />
//               <span>Medical Board Reviewed</span>
//             </div>
//             <div className="badge">
//               <FaHeart className="badge-icon" />
//               <span>Patient-Centered Care</span>
//             </div>
//           </div>
          
//           <div className="security-badges">
//             <div className="badge">
//               <FaLock className="badge-icon" />
//               <span>End-to-End Encrypted</span>
//             </div>
//             <div className="badge">
//               <FaShieldAlt className="badge-icon" />
//               <span>HIPAA Compliant</span>
//             </div>
//             <div className="badge">
//               <FaGlobe className="badge-icon" />
//               <span>GDPR Compliant</span>
//             </div>
//           </div>
//         </div>

//         {/* Medical Sources & Verification */}
//         <div className="footer-sources">
//           <div className="sources-title">
//             <FaHospital className="sources-icon" />
//             <h4>Trusted Medical Sources</h4>
//           </div>
//           <div className="sources-list">
//             <span className="source-item">World Health Organization (WHO)</span>
//             <span className="source-item">Centers for Disease Control (CDC)</span>
//             <span className="source-item">National Institutes of Health (NIH)</span>
//             <span className="source-item">Mayo Clinic</span>
//             <span className="source-item">Peer-Reviewed Journals</span>
//           </div>
//         </div>

//         {/* Medical Disclaimer */}
//         <div className="footer-disclaimer">
//           <div className="disclaimer-header">
//             <FaUserMd className="disclaimer-icon" />
//             <h4>Important Medical Disclaimer</h4>
//           </div>
//           <div className="disclaimer-content">
//             <p>
//               <strong>This AI assistant provides general health information only</strong> and is not a substitute for professional medical advice, diagnosis, or treatment. 
//               Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
//               Never disregard professional medical advice or delay in seeking it because of information provided by this assistant.
//             </p>
//             <p>
//               <FaRegClock className="disclaimer-sub-icon" />
//               <strong>Response Accuracy:</strong> While we strive for accuracy, medical information changes rapidly. 
//               All responses are generated based on current medical guidelines but should be verified with healthcare professionals.
//             </p>
//           </div>
//         </div>

//         {/* Contact & Copyright */}
//         <div className="footer-bottom">
//           <div className="contact-info">
//             <p>
//               <strong>Need Help?</strong> 
//               <br />
//               Support: <a href="mailto:support@healthguard.ai">support@healthguard.ai</a>
//               <br />
//               Feedback: <a href="mailto:feedback@healthguard.ai">feedback@healthguard.ai</a>
//             </p>
//           </div>
          
//           <div className="copyright-info">
//             <p>
//               © {new Date().getFullYear()} <strong>HealthGuard AI Public Health Initiative</strong>
//               <br />
//               <span className="version-info">Version 3.2.1 • Medical Review: November 2024</span>
//               <br />
//               <small>All conversations are anonymous, encrypted, and never stored permanently.</small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

//--------------------------------------------------------------------------------------------
import './Footer.css';
import {
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
  FaPhoneAlt,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaLock,
  FaCertificate,
  FaStethoscope,
  FaPills,
  FaHospitalAlt,
  FaClipboardCheck,
  FaHeart,
  FaLeaf,
  FaBrain,
  FaRunning
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="health-footer">
      <div className="footer-container">
        
        {/* Health Mission Statement */}
        <div className="footer-mission">
          <div className="mission-icon">
            <FaHeartbeat />
          </div>
          <div className="mission-content">
            <h3>Our Health Mission</h3>
            <p>
              Dedicated to providing accurate, accessible, and compassionate health information 
              to empower individuals in their wellness journey.
            </p>
          </div>
        </div>

        {/* Health Services Quick Grid */}
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon preventive">
              <FaLeaf />
            </div>
            <h4>Preventive Care</h4>
            <p>Disease prevention, screening, and early detection guidance</p>
          </div>

          <div className="service-card">
            <div className="service-icon mental">
              <FaBrain />
            </div>
            <h4>Mental Wellness</h4>
            <p>Stress management, emotional health, and coping strategies</p>
          </div>

          <div className="service-card">
            <div className="service-icon fitness">
              <FaRunning />
            </div>
            <h4>Physical Health</h4>
            <p>Exercise routines, nutrition, and lifestyle optimization</p>
          </div>

          <div className="service-card">
            <div className="service-icon treatment">
              <FaStethoscope />
            </div>
            <h4>Treatment Guidance</h4>
            <p>Medication information and treatment pathway education</p>
          </div>
        </div>

        {/* Emergency Quick Access */}
        <div className="emergency-section">
          <div className="emergency-header">
            <FaPhoneAlt className="emergency-icon" />
            <h4>Immediate Assistance</h4>
          </div>
          <div className="emergency-numbers">
            <div className="emergency-item">
              <span className="number-label">Medical Emergency</span>
              <span className="number-value">911 / 112</span>
            </div>
            <div className="emergency-item">
              <span className="number-label">Mental Health Crisis</span>
              <span className="number-value">988</span>
            </div>
            <div className="emergency-item">
              <span className="number-label">Poison Control</span>
              <span className="number-value">1-800-222-1222</span>
            </div>
          </div>
        </div>

        {/* Trust & Safety Badges */}
        <div className="trust-section">
          <div className="trust-badges">
            <div className="trust-badge">
              <FaCertificate />
              <span>Medically Reviewed</span>
            </div>
            <div className="trust-badge">
              <FaLock />
              <span>HIPAA Compliant</span>
            </div>
            <div className="trust-badge">
              <FaShieldAlt />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="trust-badge">
              <FaClipboardCheck />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>

        {/* Global Health Standards */}
        <div className="global-standards">
          <div className="standards-header">
            <FaGlobeAmericas />
            <h4>Global Health Standards</h4>
          </div>
          <div className="standards-list">
            <span>WHO Guidelines</span>
            <span>CDC Recommendations</span>
            <span>NHS Standards</span>
            <span>Medical Board Approved</span>
          </div>
        </div>

        {/* Medical Advisory Note */}
        <div className="advisory-note">
          <div className="advisory-icon">
            <FaUserMd />
          </div>
          <div className="advisory-content">
            <h5>Important Advisory</h5>
            <p>
              This platform provides general health information and is not a substitute for 
              professional medical advice, diagnosis, or treatment. Always consult qualified 
              healthcare providers for personal medical concerns.
            </p>
            <p className="advisory-note">
              <FaCalendarAlt className="note-icon" />
              <strong>Updated Regularly:</strong> Information reviewed monthly by medical professionals
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="health-partners">
            <p>
              <strong>Partner Organizations:</strong>
              <span> Global Health Initiative • Public Health Alliance • Medical Research Council</span>
            </p>
          </div>
          
          <div className="copyright-info">
            <p>
              © {new Date().getFullYear()} <strong>HealthGuard AI</strong> • Version 4.0.1
              <br />
              <small>
                Committed to advancing public health awareness through responsible AI
              </small>
            </p>
            <div className="contact-links">
              <a href="mailto:contact@healthguard.ai">Contact</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;