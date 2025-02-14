import styles from "../styles/Project.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>
        <span>P</span>ro<span>je</span>c<span>t</span>s
      </h2>
      <div className={styles.projectCardContainer}>
        <div className={styles.projectCard}>
          <div className={styles.projectIntro}>
            <h3>Todo App</h3>

            <p>
              A Todo App to manage tasks, allowing users to add, edit, and
              delete items efficiently.
            </p>
          </div>

          <div className={styles.projectImage}>
            <Image
              src="/p-todo1.jpg"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* card 2 */}
        <div className={styles.projectCardReverse}>
          <div className={styles.projectIntro}>
            <h3 className={styles.heading2}>Tech-Force-wesbite</h3>
            <p>
              A Tech-Force website that showcases technology services, products,
              and resources to keep users updated.
            </p>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/p-tech-2.jpg"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* card 3 */}
        <div className={styles.projectCard}>
          <div className={styles.projectIntro}>
            <h3>My-website</h3>

            <p>
              A personal website to display projects, skills, and experiences,
              providing a professional online presence.
            </p>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/p-web-3.jpg"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* card 4 */}
        <div className={styles.projectCardReverse}>
          <div className={styles.projectIntro}>
            <h3>General E-commerce</h3>

           
            <p>
           An e-commerce website designed to showcase products, provide a seamless shopping experience, and offer secure payment and contact options, ensuring a professional and user-friendly interface.
            </p>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/ecosnap.PNG"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>
        {/* card 4 */}
        <div className={styles.projectCardReverse}>
          <div className={styles.projectIntro}>
            <h3>Blog Of Post</h3>

            
            <p>
           A blog platform designed to share engaging posts, highlight featured articles, and provide easy navigation and contact options, offering a professional and reader-friendly interface.
            </p>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/blogsnap.PNG"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>
        {/* card 4 */}
        <div className={styles.projectCardReverse}>
          <div className={styles.projectIntro}>
            <h3>Client-wesbite</h3>

            <p>
              A Client website built to highlight services, portfolio, and
              contact options, offering a professional client interface.
            </p>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/p-clint-4.jpg"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>
        {/* card 4 */}
        <div className={styles.projectCardReverse}>
          <div className={styles.projectIntro}>
            <h3>blogging website</h3>

            
            <p>
           A blogging website designed to showcase articles, share insights, and engage readers, offering a professional and user-friendly interface.
           </p>

          </div>
          <div className={styles.projectImage}>
            <Image
              src="/blogingsnap.PNG"
              alt="Project 1 Image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;



