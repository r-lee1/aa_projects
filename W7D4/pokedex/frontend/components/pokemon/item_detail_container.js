import {connect} from 'react-redux';
import itemDetail from './item_detail';



const mapStatetoProps = (state, ownProps) => {
  return {
    item: state.entities.items[ownProps.match.params.itemId]
  };
};




export default connect(mapStatetoProps)(itemDetail);
