import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ img, title, desc }) => (
  <li className="course media group">
    <img className="course-img" src={img} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </li>
);

Course.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

Course.defaultProps = {
  img: 'No img',
  title: 'No title',
  desc: 'No description',
};

export default Course;
