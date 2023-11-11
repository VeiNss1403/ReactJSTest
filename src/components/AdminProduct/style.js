import { Upload, Image } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled.h1`
  color: #000;
  font-size: 14px;
`;

export const WrapperUploadFile = styled(Upload)`
  & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  & .ant-upload-list-item-container {
    display: none;
  }
`;

export const WrapperUploadFileMini = styled(Upload)`
  & .ant-upload-wrapper.sc-hIueGu.joRlKk.css-dev-only-do-not-override-i0102m{
    display: flex;
    align-items: center;
  }
`;
