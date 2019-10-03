import React from 'react'
import {MyCard} from '../components/MyCard'



//pagebody of home page
export default class HomePageBody extends React.Component {

    render() {
      return (
        <div className="marginTop">
          <div className="row  cardHolder">
            <div className="col-lg-4">
              <div className="content bg-diam">
                <a href="#">
                  <MyCard num={1} total={3} img="https://image.shutterstock.com/image-photo/brilliant-cut-diamond-held-by-260nw-1068771257.jpg" label="Search Diamonds" text="Search by any parameter, Contact the seller, Shake hands, Mazal ubracha" />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content  bg-diam">
                <a href="#">
                  <MyCard num={2} total={3} img="https://image.shutterstock.com/image-photo/message-bottle-floating-ocean-260nw-667435318.jpg" label="Messages" text="Check and send messages to members, send ofers, Stay in touch." />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content bg-diam">
                <a href="#">
                  <MyCard num={3} total={3} img="https://image.shutterstock.com/image-photo/auction-bid-sale-judgment-mallet-260nw-1033130779.jpg" label="Auction" text="Join the fun and bid on any diamond in the auction list. Get lucky." />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }