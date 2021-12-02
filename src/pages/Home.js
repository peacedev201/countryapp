import axios from "../utils/axios";
import { useEffect, useState } from "react";
import SimpleListMenu from '../components/Selectbox'
import {
  Grid,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from "react-redux";
import { action } from '../state/actions';

function Home(props) {
  const continents = {
    type: 'select',
    header: "Continent",
    name: "continent",
    options: [
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ]
  }
  const [countries, setCountries] = useState({
    type: 'select',
    header: "Countries",
    name: "countries",
    options: []
  })

  const result = props.global.result
  const [name, setName] = useState("Eric")
  const [title, setTitle] = useState("Countries")

  const [continent, setContinent] = useState("africa")
  const [country, setCountry] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(async () => {
    if (continent) {
      setCountries({ ...countries, options: [] })
      let res = ((await axios.get(`/region/${continent}`)).data).map((item) => {
        return item.name.common
      })
      setCountries({ ...countries, options: res })
      setCountry(res[selectedIndex])
    }
  }, [continent])


  const handleSelect = (res) => {
    if (res) {
      if (res.name == 'continent') {
        setContinent(continents.options[res.value])
      } else {
        setSelectedIndex(res.value)
        setCountry(countries.options[res.value])
      }
    }
  }

  const searchResult = async () => {
    let result = (await axios.get(`/name/${country}`)).data

    if (result) {
      this.props.action(result);
    }
  }

  const clearResult = () => {
    this.props.action([]);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" >
        Welcome, {name}
      </Typography>
      <Typography id="title" variant="h4" >{title}</Typography>

      <Grid container spacing={4} style={{ paddingTop: 50 }}>

        <Grid item xs={3}>
          <SimpleListMenu data={continents} handleSelect={handleSelect}></SimpleListMenu>
        </Grid>
        <Grid item xs={3}>
          <SimpleListMenu data={countries} handleSelect={handleSelect}></SimpleListMenu>
        </Grid>

      </Grid>

      <Button variant="contained" color="primary" style={{ margin: 20 }} onClick={searchResult}>Search</Button>
      <Button variant="contained" color="primary" style={{ margin: 20 }} onClick={clearResult}>Clear</Button>

      {result.length > 0 &&
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Official Name</TableCell>
                <TableCell >Common Name</TableCell>
                <TableCell >Capital</TableCell>
                <TableCell >Region</TableCell>
                <TableCell >Population</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name.official}
                  </TableCell>
                  <TableCell >{row.name.common}</TableCell>
                  <TableCell >{row.capital}</TableCell>
                  <TableCell >{row.region}</TableCell>
                  <TableCell >{row.population}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
    </Container>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  action: (payload) => dispatch(action(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);;
