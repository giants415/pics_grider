import React from 'react';

class ImageCard extends React.Component {
  render() {
    // destructures image prop
    const { description, urls } = this.props.image;

    return (
      <div>
        <img
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
