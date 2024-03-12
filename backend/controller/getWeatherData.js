import { location as dbData } from "../data/dbData.js";


export const getWeatherData = (req, res) => {
    const location = req.query?.location?.replace("\"", "").replace("\"", "");


    if (location) {

        const data = dbData.find((item) => item.location.name.toLowerCase() === location.toLowerCase());
        if (data) {
            return res.status(200).json({ data, status: 200, "message": "data fetched successfully" });
        }


        return res.status(400).json({ data: null, status: 400, "message": "Location not found" })

    }


    return res.status(400).json({ data: null, status: 400, "message": "location field empty" });

}

export const addWeatherData = (req, res) => {
    const { name, region, country, temp_c, temp_f, feelslike_c } = req.body;

    if (name && region && country && temp_c && temp_f && feelslike_c && !dbData.find(item => item.name.toLowerCase() === name.toLowerCase())) {
        dbData.push(req.body);
        return res.status(200).json({ data: null, status: 200, "message": "data added successfully" });
    }

    return res.status(400).json({ data: null, status: 400, "message": "some fields are missing" });
}