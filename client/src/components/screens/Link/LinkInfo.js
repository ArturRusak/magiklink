import React, { useEffect, useState } from "react";
import { settingsAPI } from "../../../constants";
import { Block } from "baseui/block";
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell
} from "baseui/table";

export default function LinkInfo({ match }) {
  const linkID = match.params.linkId;
  const [status, setStatus] = useState("");
  const [link, setLink] = useState({});

  useEffect(() => {
    fetch(`${settingsAPI.API}/links/${linkID}`)
      .then(response => response.json())
      .then(({ data, status }) => {
        setStatus(status);
        setLink(data);
      })
      .catch(error => {
        setStatus(`${error}`);
        setLink({});
      });
  }, []);

  const headTitles = () =>
    Object.keys(link).map((key, index) =>
      <StyledHeadCell key={`${index}--head-cell`}>{key}</StyledHeadCell>);
  const bodyCell = () =>
    Object.keys(link).map((key, index) =>
      <StyledCell key={`${index}--body-cell`}>{link[key]}</StyledCell>);

  return (
    <React.Fragment>
      <Block
        margin={"1em 0"}
      >
        <h1>Links Info</h1>
      </Block>
      <Block>
        <StyledTable>
        <StyledHead>
          {headTitles()}
        </StyledHead>
        <StyledBody>
          <StyledRow>
            {bodyCell()}
          </StyledRow>
        </StyledBody>
      </StyledTable>
      </Block>
    </React.Fragment>
  );
}


