import { connect } from "react-redux";
import { setStoreInfo } from "../../../redux/StoreInfo/StoreInfo.action";
import EditStoreInfo from "./";

const mapDispatchToProps = {
  setStoreInfo: setStoreInfo
};

export default connect(
  null,
  mapDispatchToProps
)(EditStoreInfo);
