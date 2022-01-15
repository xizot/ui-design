import { Button, TextField,Grid, styled } from "@mui/material";
import { MovieStart, MovieScoreRated } from '../MovieItem/MovieItem.elements'
import { defaultPadding, theme } from "../../GlobalMUI";

export const CommentContainer = styled("div")({
    boxShadow: theme.shadows[4],
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    minHeight: 300,
    marginBottom: defaultPadding,
    '.button-container': {       
        justifyContent: "flex-end",
        '.button-child': {
            width: '120px',
        }
    },
});
export const TextArea = styled(TextField)({
    minHeight: '225px',
    width: '100%',
});
function BoxComment(){
    return(
        <CommentContainer>
            <MovieStart style={{padding: '0', marginBottom: '10px'}}>
                <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
                <box-icon name="star" type="solid" color="#ffe700" size="sm"></box-icon>
            <MovieScoreRated>{Math.round(8)}/10</MovieScoreRated>
            </MovieStart> 
            <TextArea multiline rows={8}/>
            <div className="button-container">
                <Button  className="button-child" variant="outlined" color="error" style={{marginRight: "5px"}}>
                    Xóa
                </Button>
                <Button className="button-child" variant="outlined" color="primary">
                    Chỉnh sửa
                </Button>
            </div>
        </CommentContainer>
    )

}
export default BoxComment;