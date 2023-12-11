import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperMiniType,
  WrapperProducts,
  WrapperTypeProduct,
  WrapperTypeProductContent,
} from "./style";
import slider1 from "../../Assets/Images/SliderHomePage/banner-1.webp";
import slider2 from "../../Assets/Images/SliderHomePage/banner-2.webp";
import slider3 from "../../Assets/Images/SliderHomePage/banner-3.webp";
import slider4 from "../../Assets/Images/SliderHomePage/banner-4.webp";
import slider5 from "../../Assets/Images/SliderHomePage/banner-5.webp";
import image1 from "../../Assets/Images/SliderHomePage/Heposal-600X336-1.webp";
import image2 from "../../Assets/Images/SliderHomePage/tang-can-tamino.webp";
import image3 from "../../Assets/Images/SliderHomePage/vivitaquangcao.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [LoadingMiniType, setLoadingMiniType] = useState(false);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);
  const [limitNb, setLimitNb] = useState(6);
  const [pageNb, setPageNb] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataProductNb, setDataProductNb] = useState([]);

  const [typeProducts, setTypeProducts] = useState([]);
  const [typeMiniProducts, setTypeMiniProducts] = useState([]);
  const fetchProductAll = async ({ queryKey: [, page, limit, search] }) => {
    const res = await ProductService.getAllProduct(search, limit, page);
    return res;
  };

  const fetchProductNbAll = async ({
    queryKey: [, pageNb, limitNb, search, sort],
  }) => {
    const res = await ProductService.getAllProduct(
      search,
      limitNb,
      pageNb,
      sort
    );
    return res;
  };

  const queryConfig = {
    retry: 3,
    retryDelay: 1000,
    staleTime: 3600000,
    keepPreviousData: true,
  };
  const {
    isLoading,
    data: products,
    isPreviousData,
  } = useQuery(
    ["products", page, limit, searchDebounce],
    fetchProductAll,
    queryConfig
  );

  const {
    isLoading: isLoadingNb,
    data: productNbs,
    isPreviousData: isPreviousDataNb,
  } = useQuery(
    ["products-nb", pageNb, limitNb, searchDebounce, { selled: -1 }],
    fetchProductNbAll,
    queryConfig
  );

  useEffect(() => {
    if (products && products?.data?.length > 0) {
      setDataProduct((prev) => [...prev, ...products?.data]);
    }
  }, [products]);

  useEffect(() => {
    if (productNbs && productNbs?.data?.length > 0) {
      setDataProductNb((prev) => [
        ...prev,
        ...productNbs?.data.sort((a, b) => b.selled - a.selled),
      ]);
    }
  }, [productNbs]);

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  const fetchAllMiniTypeProduct = async (type) => {
    setLoadingMiniType(true);
    const res = await ProductService.getAllMiniTypeProduct(type);
    if (res?.status === "OK") {
      setTypeMiniProducts(res?.data);
    }
    setLoadingMiniType(false);
  };

  useEffect(() => {
    fetchAllTypeProduct();
    fetchAllMiniTypeProduct();
  }, []);
  const navigate = useNavigate();
  const handleNavigatetype = (miniType) => {
    navigate(
      `/product/miniType/${miniType
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ?.replace(/ /g, "_")}`,
      { state: miniType }
    );
  };
  const content = (
    <Loading isLoading={LoadingMiniType}>
      <div>
        {typeMiniProducts.map((item) => {
          return (
            <WrapperMiniType onClick={() => handleNavigatetype(item)}>
              {item}
            </WrapperMiniType>
          );
        })}
      </div>
    </Loading>
  );

  return (
    <>
      <WrapperTypeProductContent>
        <WrapperTypeProduct>
          {typeProducts
            .slice()
            .reverse()
            .map((item) => {
              return (
                <TypeProduct
                  content={content}
                  onOpenChange={() => fetchAllMiniTypeProduct(item)}
                  name={item}
                  key={item}
                />
              );
            })}
        </WrapperTypeProduct>
      </WrapperTypeProductContent>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#efefef" }}
      >
        <SliderComponent
          arrImages={[slider1, slider2, slider3, slider4, slider5]}
          arrImageRight={[image1, image2, image3]}
        />
        <div
          id="container"
          style={{
            height: "auto",
            width: "1270px",
            margin: "0 auto",
            padding: 20,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "2px 2px 2px #00adb5",
              color: "#00adb5",
            }}
          >
            Sản phẩm
          </h1>
          <Loading isLoading={isLoading}>
            <WrapperProducts>
              {dataProduct?.map((product) => {
                return (
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
                );
              })}
            </WrapperProducts>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <WrapperButtonMore
                textbutton={isPreviousData ? "Load more" : "Xem thêm"}
                type="outline"
                styleButton={{
                  border: `1px solid ${
                    limit >= products?.data?.length ? "#f5f5f5" : "#00adb5"
                  }`,
                  color: `${
                    limit >= products?.data?.length ? "#f5f5f5" : "#00adb5"
                  }`,
                  width: "240px",
                  height: "38px",
                  borderRadius: "4px",
                }}
                disabled={limit >= products?.data?.length}
                styleTextButton={{
                  fontWeight: 500,
                  color: limit >= products?.data?.length && "#fff",
                }}
                onClick={() => setPage((prev) => prev + 1)}
              />
            </div>
          </Loading>
        </div>
        <div
          id="container"
          style={{
            height: "auto",
            width: "1270px",
            margin: "0 auto",
            padding: 20,
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              textShadow: "2px 2px 2px #00adb5",
              color: "#00adb5",
            }}
          >
            Sản phẩm nổi bật
          </h1>
          <Loading isLoading={isLoadingNb}>
            <WrapperProducts>
              {dataProductNb?.map((productnb) => {
                return (
                  <CardComponent
                    key={productnb._id}
                    countInStock={productnb.countInStock}
                    description={productnb.description}
                    image={productnb.image}
                    name={productnb.name}
                    price={productnb.price}
                    rating={productnb.rating}
                    type={productnb.type}
                    selled={productnb.selled}
                    discount={productnb.discount}
                    id={productnb._id}
                  />
                );
              })}
            </WrapperProducts>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <WrapperButtonMore
                textbutton={isPreviousDataNb ? "Load more" : "Xem thêm"}
                type="outline"
                styleButton={{
                  border: `1px solid ${
                    limitNb >= products?.data?.length ? "#f5f5f5" : "#00adb5"
                  }`,
                  color: `${
                    limitNb >= products?.data?.length ? "#f5f5f5" : "#00adb5"
                  }`,
                  width: "240px",
                  height: "38px",
                  borderRadius: "4px",
                }}
                disabled={limitNb >= products?.data?.length}
                styleTextButton={{
                  fontWeight: 500,
                  color: limitNb >= products?.data?.length && "#fff",
                }}
                onClick={() => setPageNb((prev) => prev + 1)}
              />
            </div>
          </Loading>
        </div>
      </div>
    </>
  );
};

export default HomePage;
