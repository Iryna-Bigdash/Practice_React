import { React, Component } from 'react';
// import { ImageGallery } from "module";

export default class GallerySection extends Component {
state = {
    pictures: null,
    loading: false,
}

  componentDidMount() {
    const KEY = '34703273-719fc97d4df3919ec9a1e2b2b';
    const BASE_URL = 'https://pixabay.com';
    const URL = `${BASE_URL}/api/?key=${KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`;
    

    this.setState({loading: true})
    fetch(URL).then(response => response.json()).then(pictures => this.setState({pictures})).finally(() => this.setState({loading:false}));
  }

  render() {
    return (
      <div
        style={{
          maxWidth: 1170,
          margin: '0 auto',
          padding: 20,
          outline: '1px solid red',
        }}
      >
        {this.state.loading && <h1>Загрузка..</h1>}
        {this.state.pictures && (
        <ul className="gallery">
{this.state.pictures.hits.map(({id, webformatURL, tags}) => (
 <li className="gallery-item" key={id}>
 <img src={webformatURL} alt={tags} />
 </li>
))}  
        </ul>
        )}

      </div>
    );
  }
}
