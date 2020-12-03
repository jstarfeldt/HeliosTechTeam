import { Grid, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Search = () => {
    const [input, setInput] = useState("");

    return (
        <Grid container>
            <TextField label="Title" variant="filled"
                onChange={(e) => setInput(e.target.value)}/>
        </Grid>
    )

}

export default Search;