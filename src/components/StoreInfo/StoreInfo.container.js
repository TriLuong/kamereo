import { connect } from "react-redux";
import StoreInfo from "./";

const mapStateToProps = (state) => ({
  storeInfo: state.storeInfoReducer.storeInfo
});

export default connect(
  mapStateToProps,
  null
)(StoreInfo);
