import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NumericInput from "react-numeric-input";
import * as FormActions from "../actions";

class PromotionMgt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoData: {
        id: this.props.promotionForm.length+1,
        code: "",
        text: "",
        discount: 0,
        rules: {
          customerNum: 0,
          basePrice: 0
        }
      },
      action: "add"
    };
  }

  getEdit(oldValue) {
    this.setState({
      promoData: {
        id: oldValue.id,
        code: oldValue.code,
        text: oldValue.text,
        discount: oldValue.discount,
        rules: {
          customerNum: oldValue.rules.customerNum,
          basePrice: oldValue.rules.basePrice
        }
      },
      action: "edit"
    });
  }

  render() {
    const { promotionForm, actions } = this.props
    console.log(this.state);
    return (
      <div className="promotionMgtFormWrapper">
        <div className="promotionMgtSection">
          <div className="promotionMgtBorder">
            <div>
              <p className="titlePromotionMgt">Promotion Management</p>
              <div className="rowMgt">
                <div className="widthLeft">Code:</div>
                <div className="widthRight">
                  <input
                    type="text"
                    onChange={e =>
                      this.setState({
                        promoData: {
                          ...this.state.promoData,
                          code: e.target.value
                        }
                      })}
                    value={this.state.promoData.code}
                  />
                </div>
              </div>
              <div className="clear" />
              <div className="rowMgt">
                <div className="widthLeft">Text:</div>
                <div className="widthRight">
                  <input
                    type="text"
                    onChange={e =>
                      this.setState({
                        promoData: {
                          ...this.state.promoData,
                          text: e.target.value
                        }
                      })}
                    value={this.state.promoData.text}
                  />
                </div>
              </div>
              <div className="clear" />
              <div className="rowMgt">
                <div className="widthLeft">Discount(%):</div>
                <div className="widthRight">
                  <NumericInput
                    name="discount"
                    min={1}
                    max={100}
                    step={1}
                    onChange={value =>
                      this.setState({
                        promoData: {
                          ...this.state.promoData,
                          discount: parseInt(value, 10)
                        }
                      })}
                    value={this.state.promoData.discount}
                  />
                </div>
              </div>
              <div className="clear" />
              <div className="rowMgt">
                <div className="widthLeft">Customer(s):</div>
                <div className="widthRight">
                  <NumericInput
                    name="customer"
                    min={0}
                    max={100}
                    step={1}
                    onChange={value =>
                      this.setState({
                        promoData: {
                          ...this.state.promoData,
                          rules: {
                            ...this.state.promoData.rules,
                            customerNum: parseInt(value, 10)
                          }
                        }
                      })}
                    value={this.state.promoData.rules.customerNum}
                  />
                </div>
              </div>
              <div className="clear" />
              <div className="rowMgt">
                <div className="widthLeft">Price:</div>
                <div className="widthRight">
                  <NumericInput
                    name="price"
                    min={0}
                    max={1000000}
                    step={1}
                    onChange={value =>
                      this.setState({
                        promoData: {
                          ...this.state.promoData,
                          rules: {
                            ...this.state.promoData.rules,
                            basePrice: parseInt(value, 10)
                          }
                        }
                      })}
                    value={this.state.promoData.rules.basePrice}
                  />
                </div>
              </div>
              <div className="clear" />
              <div className="rowMgt">
                {this.state.action === "add" ? (
                  <div
                    className="generateBtn"
                    onClick={() =>
                      actions.createPromotion(this.state.promoData)}
                  >
                    Generate Promotion
                  </div>
                ) : (
                  <div
                    className="generateBtn"
                    onClick={() => {
                      actions.editPromotion(this.state.promoData);
                      this.setState({
                        promoData: {
                          id: this.props.promotionForm.length+1,
                          code: "",
                          text: "",
                          discount: 0,
                          rules: {
                            customerNum: 0,
                            basePrice: 0
                          }
                        },
                        action: "add"
                      });
                    }}
                  >
                    Edit Promotion
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="promotionMgtSection">
          <div className="promotionMgtBorder overflowScroll">
            <p className="titlePromotionMgt">Promotion Detail</p>
            <div className="billSection">
              <table className="listPromotionTable">
                <tbody>
                  <tr>
                    <th>Text</th>
                    <th>Discount(%)</th>
                    <th>EDIT</th>
                  </tr>
                  {promotionForm.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.text}</td>
                        <td>{value.discount}</td>
                        <td>
                          <a onClick={() => this.getEdit(value)}>EDIT</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  billForm: state.restaurantReducer,
  promotionForm: state.promotionReducer,
  tableForm: state.tableReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FormActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotionMgt);
