import React from "react";
type LikeCountsType = {
    likecounts: number;
}

const Like = (props: LikeCountsType) => {
debugger
    return <div>
        {props.likecounts}
    </div>

}
export default Like