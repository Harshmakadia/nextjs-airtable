import React, {useEffect} from "react";
import ContentCardsSection from "components/ContentCardsSection";

class ChoosePage extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NO_CODE_ENDPOINT}?tableName=BusinessName`)
    const images = await res.json();
    let mindData = [];
    for(let i=0; i< images.records.length; i++){
      mindData.push({
        image: images.records[i].fields.Image,
        title: images.records[i].fields.Name,
        body: images.records[i].fields.Description,
        url: `/form/${images.records[i].fields.Alias}`,
      });
    }
    return { images: mindData}
  }
  componentWillMount() {
    this.setState({
      images: this.props.images
    })
  }
  render() {
    return (
      <>
      <ContentCardsSection
      data={this.state.images}
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Business Type"
      subtitle=""
    />
    </>
    )
  }
}

export default ChoosePage;
