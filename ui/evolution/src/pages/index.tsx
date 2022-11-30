import React from "react"
import { Content, H1, Main, Progress_Side, Upload_File, Upload_Side } from "./styles"


export const Home = () => {
    return (
        <Content>
            <Main>
                <H1>Upload File</H1>
                <Upload_Side>
                    <Upload_File>
                        <input type="file" id="fileInput" />
                    </Upload_File>
                    <label htmlFor="fileInput">
                        <img src="img/cloud-arrow-up.svg" width={"65px"} />
                    </label>
                </Upload_Side>
                <Progress_Side>
                    
                </Progress_Side>
            </Main>

        </Content>
    )
}