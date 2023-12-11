import React from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperNavigate, WrapperProducts } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import * as ProductService from "../../services/ProductService";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";

const BrandProductPage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const test = useSelector((state) => state);
  const brandProduct = useSelector((state) => state?.product?.brand);
  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [panigate, setPanigate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  const navigate = useNavigate();
  const fetchProductType = async (brand, page, limit) => {
    setLoading(true);
    const res = await ProductService.getProductBrand(brand, page, limit);
    if (res?.status === "OK") {
      setLoading(false);
      setProducts(res?.data);
      setPanigate({ ...panigate, total: res?.total });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      fetchProductType(state, panigate.page, panigate.limit);
    }
  }, [state, panigate.page, panigate.limit]);

  const onChange = (current, pageSize) => {
    setPanigate({ ...panigate, page: current - 1, limit: pageSize });
  };

  return (
    <Loading isLoading={loading}>
      <div style={{ width: "100%", background: "#efefef", minHeight: "100vh" }}>
        <div style={{ width: "1300px", margin: "0 auto", height: "100%" }}>
          <div style={{ paddingTop: "20px" }}>
            <WrapperNavigate onClick={() => navigate("/")}>
              Trang chủ
            </WrapperNavigate>
            <WrapperNavigate>
              {" > "}
              Thương hiệu
            </WrapperNavigate>
            <WrapperNavigate>
              {" > "}
              {state}
            </WrapperNavigate>
          </div>
          <Row
            style={{
              flexWrap: "nowrap",
              paddingTop: "10px",
              height: "calc(100% - 20px)",
            }}
          >
            <WrapperNavbar span={5}>
              <NavBarComponent />
            </WrapperNavbar>
            <Col
              span={19}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <WrapperProducts>
                {products
                  ?.filter((pro) => {
                    const nameMatch =
                      searchDebounce === "" ||
                      pro?.name
                        ?.toLowerCase()
                        .includes(searchDebounce?.toLowerCase());

                    const brandMatch =
                      brandProduct.length === 0 ||
                      brandProduct.includes(pro?.brand);

                    const priceFilter =
                      pro?.price >= test?.product?.pricemin &&
                      pro?.price <= test?.product?.pricemax;
                    const ratingFilter = pro?.rating >= test?.product?.rating;
                    return (
                      nameMatch && brandMatch && priceFilter && ratingFilter
                    );
                  })
                  ?.map((product) => (
                    <CardComponent
                      key={product._id}
                      countInStock={product.countInStock}
                      description={product.description}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      rating={product.rating}
                      type={product.type}
                      selled={product.selled}
                      discount={product.discount}
                      id={product._id}
                    />
                  ))}
              </WrapperProducts>

              <Pagination
                defaultCurrent={panigate.page + 1}
                total={panigate?.total}
                onChange={onChange}
                style={{ textAlign: "center", marginTop: "10px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Loading>
  );
};

export default BrandProductPage;
