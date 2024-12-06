import React from "react";

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-brush fs-2 mb-3"></i>
                <h5 className="card-title">Web Design</h5>
                <p className="card-text">
                  We create visually stunning and user-friendly websites that
                  are optimized for both desktop and mobile devices.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-code-slash fs-2 mb-3"></i>
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">
                  Our frontend developers build fast, responsive, and
                  interactive websites with modern technologies like React,
                  HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-laptop fs-2 mb-3"></i>
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">
                  We offer reliable backend solutions using Node.js, Express,
                  and databases to ensure your website runs smoothly and
                  securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
