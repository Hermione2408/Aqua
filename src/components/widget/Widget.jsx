import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { ListAltOutlined, SearchOffOutlined, SearchOutlined } from "@mui/icons-material";

const Widget = (props) => {

  const {data} = props
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
        </span>
        {data.link && <span className="link">{data.link}</span>}

        {data.isCount && <span className="count">{data.count}</span>}
      </div>
      {!data.isCount && <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          
        </div>
        {data.icon}
      </div>}

    </div>
  );
};

export default Widget;
