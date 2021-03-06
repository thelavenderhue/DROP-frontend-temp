import faker from "faker";

const data = [];

for (let i = 0; i < 100; i++) {
    const object = {
        orderId: "DT00" + i,
        name: faker.company.companyName(),
        customerId: faker.datatype.number({ min: 12312, max: 99845 }),
        orderRegisteredOn: faker.date.between("2021-06-20", "2021-06-30"),
        itemsInCart: Math.floor(Math.random() * 20),
        distance: Math.floor(Math.random() * 10),
        weight: Math.floor(Math.random() * 10),
    };

    data.push(object);
}

console.log(data);

/**
 * Sample output: 
 * [
    {
        "orderId": "DT000",
        "name": "Feil, Schaden and Farrell",
        "customerId": 73842,
        "orderRegisteredOn": "2021-06-21T03:52:06.793Z",
        "itemsInCart": 6,
        "distance": 3,
        "weight": 3
    },
    {
        "orderId": "DT001",
        "name": "Smitham and Sons",
        "customerId": 45156,
        "orderRegisteredOn": "2021-06-23T06:58:23.513Z",
        "itemsInCart": 8,
        "distance": 9,
        "weight": 0
    },
    {
        "orderId": "DT002",
        "name": "Johnston - Hoeger",
        "customerId": 24156,
        "orderRegisteredOn": "2021-06-25T11:00:26.026Z",
        "itemsInCart": 13,
        "distance": 0,
        "weight": 4
    },
    {
        "orderId": "DT003",
        "name": "Kuphal Group",
        "customerId": 71400,
        "orderRegisteredOn": "2021-06-29T23:27:43.625Z",
        "itemsInCart": 5,
        "distance": 7,
        "weight": 3
    },
    {
        "orderId": "DT004",
        "name": "Kris and Sons",
        "customerId": 24572,
        "orderRegisteredOn": "2021-06-22T01:34:44.298Z",
        "itemsInCart": 6,
        "distance": 9,
        "weight": 4
    },
    {
        "orderId": "DT005",
        "name": "Bailey, Herman and Kuhlman",
        "customerId": 32639,
        "orderRegisteredOn": "2021-06-24T00:48:11.521Z",
        "itemsInCart": 3,
        "distance": 0,
        "weight": 9
    },
    {
        "orderId": "DT006",
        "name": "Murray, Corkery and Ratke",
        "customerId": 41046,
        "orderRegisteredOn": "2021-06-26T21:54:20.134Z",
        "itemsInCart": 14,
        "distance": 9,
        "weight": 9
    },
    {
        "orderId": "DT007",
        "name": "Lueilwitz, Steuber and Ratke",
        "customerId": 90926,
        "orderRegisteredOn": "2021-06-28T09:51:56.103Z",
        "itemsInCart": 8,
        "distance": 8,
        "weight": 4
    },
    {
        "orderId": "DT008",
        "name": "Thompson, Schroeder and Gorczany",
        "customerId": 32711,
        "orderRegisteredOn": "2021-06-22T22:00:39.629Z",
        "itemsInCart": 12,
        "distance": 7,
        "weight": 8
    },
    {
        "orderId": "DT009",
        "name": "Grady - Spinka",
        "customerId": 31361,
        "orderRegisteredOn": "2021-06-26T01:38:25.415Z",
        "itemsInCart": 1,
        "distance": 2,
        "weight": 5
    },
    {
        "orderId": "DT0010",
        "name": "McGlynn - Murray",
        "customerId": 37964,
        "orderRegisteredOn": "2021-06-27T10:47:01.333Z",
        "itemsInCart": 14,
        "distance": 8,
        "weight": 2
    },
    {
        "orderId": "DT0011",
        "name": "Reynolds, McDermott and Zboncak",
        "customerId": 18951,
        "orderRegisteredOn": "2021-06-29T19:38:10.863Z",
        "itemsInCart": 8,
        "distance": 7,
        "weight": 7
    },
    {
        "orderId": "DT0012",
        "name": "Bins Group",
        "customerId": 43778,
        "orderRegisteredOn": "2021-06-20T12:49:47.660Z",
        "itemsInCart": 14,
        "distance": 8,
        "weight": 4
    },
    {
        "orderId": "DT0013",
        "name": "Champlin, O'Reilly and McCullough",
        "customerId": 74660,
        "orderRegisteredOn": "2021-06-21T00:58:34.755Z",
        "itemsInCart": 0,
        "distance": 6,
        "weight": 8
    },
    {
        "orderId": "DT0014",
        "name": "Dare, Welch and Zieme",
        "customerId": 48162,
        "orderRegisteredOn": "2021-06-28T23:08:36.682Z",
        "itemsInCart": 3,
        "distance": 3,
        "weight": 0
    },
    {
        "orderId": "DT0015",
        "name": "Haag, Collins and Leffler",
        "customerId": 84913,
        "orderRegisteredOn": "2021-06-29T10:37:46.031Z",
        "itemsInCart": 0,
        "distance": 4,
        "weight": 8
    },
    {
        "orderId": "DT0016",
        "name": "Fisher - Heidenreich",
        "customerId": 25584,
        "orderRegisteredOn": "2021-06-20T07:22:05.319Z",
        "itemsInCart": 18,
        "distance": 6,
        "weight": 8
    },
    {
        "orderId": "DT0017",
        "name": "Romaguera, Bednar and Gaylord",
        "customerId": 58515,
        "orderRegisteredOn": "2021-06-23T09:43:09.903Z",
        "itemsInCart": 6,
        "distance": 7,
        "weight": 0
    },
    {
        "orderId": "DT0018",
        "name": "Lowe, Trantow and Parker",
        "customerId": 67393,
        "orderRegisteredOn": "2021-06-21T02:54:31.511Z",
        "itemsInCart": 13,
        "distance": 3,
        "weight": 0
    },
    {
        "orderId": "DT0019",
        "name": "Fahey, Zulauf and Keebler",
        "customerId": 34118,
        "orderRegisteredOn": "2021-06-20T21:44:24.211Z",
        "itemsInCart": 9,
        "distance": 7,
        "weight": 1
    },
    {
        "orderId": "DT0020",
        "name": "Torp, Bruen and Mitchell",
        "customerId": 13816,
        "orderRegisteredOn": "2021-06-28T10:58:18.955Z",
        "itemsInCart": 2,
        "distance": 0,
        "weight": 8
    },
    {
        "orderId": "DT0021",
        "name": "Von - Gutkowski",
        "customerId": 29829,
        "orderRegisteredOn": "2021-06-27T06:53:04.875Z",
        "itemsInCart": 6,
        "distance": 7,
        "weight": 2
    },
    {
        "orderId": "DT0022",
        "name": "Collier Inc",
        "customerId": 21656,
        "orderRegisteredOn": "2021-06-25T12:17:59.875Z",
        "itemsInCart": 8,
        "distance": 8,
        "weight": 6
    },
    {
        "orderId": "DT0023",
        "name": "Hessel - Wiegand",
        "customerId": 16052,
        "orderRegisteredOn": "2021-06-26T08:09:33.081Z",
        "itemsInCart": 8,
        "distance": 2,
        "weight": 4
    },
    {
        "orderId": "DT0024",
        "name": "Moore and Sons",
        "customerId": 32840,
        "orderRegisteredOn": "2021-06-21T03:30:09.776Z",
        "itemsInCart": 19,
        "distance": 2,
        "weight": 4
    },
    {
        "orderId": "DT0025",
        "name": "Dibbert and Sons",
        "customerId": 35936,
        "orderRegisteredOn": "2021-06-25T21:17:46.789Z",
        "itemsInCart": 11,
        "distance": 7,
        "weight": 8
    },
    {
        "orderId": "DT0026",
        "name": "Fahey, Bayer and Mills",
        "customerId": 31047,
        "orderRegisteredOn": "2021-06-25T13:54:44.112Z",
        "itemsInCart": 4,
        "distance": 7,
        "weight": 8
    },
    {
        "orderId": "DT0027",
        "name": "Leannon - Kreiger",
        "customerId": 47470,
        "orderRegisteredOn": "2021-06-28T23:24:48.993Z",
        "itemsInCart": 10,
        "distance": 3,
        "weight": 2
    },
    {
        "orderId": "DT0028",
        "name": "Larson, Boehm and Ruecker",
        "customerId": 77980,
        "orderRegisteredOn": "2021-06-27T12:34:26.092Z",
        "itemsInCart": 5,
        "distance": 2,
        "weight": 0
    },
    {
        "orderId": "DT0029",
        "name": "Carroll LLC",
        "customerId": 38822,
        "orderRegisteredOn": "2021-06-23T07:24:54.273Z",
        "itemsInCart": 0,
        "distance": 4,
        "weight": 6
    },
    {
        "orderId": "DT0030",
        "name": "Schinner, Zboncak and Sauer",
        "customerId": 60939,
        "orderRegisteredOn": "2021-06-28T17:08:45.394Z",
        "itemsInCart": 16,
        "distance": 7,
        "weight": 9
    },
    {
        "orderId": "DT0031",
        "name": "Beier - Kris",
        "customerId": 24506,
        "orderRegisteredOn": "2021-06-27T11:55:59.924Z",
        "itemsInCart": 14,
        "distance": 2,
        "weight": 8
    },
    {
        "orderId": "DT0032",
        "name": "Hessel LLC",
        "customerId": 85800,
        "orderRegisteredOn": "2021-06-21T16:33:29.869Z",
        "itemsInCart": 12,
        "distance": 0,
        "weight": 8
    },
    {
        "orderId": "DT0033",
        "name": "Harris and Sons",
        "customerId": 24046,
        "orderRegisteredOn": "2021-06-27T23:20:38.472Z",
        "itemsInCart": 13,
        "distance": 4,
        "weight": 9
    },
    {
        "orderId": "DT0034",
        "name": "Padberg - Bode",
        "customerId": 19813,
        "orderRegisteredOn": "2021-06-24T15:34:34.570Z",
        "itemsInCart": 8,
        "distance": 9,
        "weight": 4
    },
    {
        "orderId": "DT0035",
        "name": "Nikolaus LLC",
        "customerId": 97913,
        "orderRegisteredOn": "2021-06-22T02:04:41.091Z",
        "itemsInCart": 3,
        "distance": 9,
        "weight": 4
    },
    {
        "orderId": "DT0036",
        "name": "Kessler, Schneider and Leannon",
        "customerId": 92196,
        "orderRegisteredOn": "2021-06-24T22:37:55.614Z",
        "itemsInCart": 7,
        "distance": 6,
        "weight": 6
    },
    {
        "orderId": "DT0037",
        "name": "Witting, Kirlin and Greenholt",
        "customerId": 80642,
        "orderRegisteredOn": "2021-06-20T15:19:50.113Z",
        "itemsInCart": 9,
        "distance": 7,
        "weight": 8
    },
    {
        "orderId": "DT0038",
        "name": "McClure - Harvey",
        "customerId": 91941,
        "orderRegisteredOn": "2021-06-28T16:36:47.440Z",
        "itemsInCart": 0,
        "distance": 4,
        "weight": 9
    },
    {
        "orderId": "DT0039",
        "name": "Toy Inc",
        "customerId": 20849,
        "orderRegisteredOn": "2021-06-24T00:03:54.390Z",
        "itemsInCart": 11,
        "distance": 5,
        "weight": 1
    },
    {
        "orderId": "DT0040",
        "name": "Nolan, Upton and Corwin",
        "customerId": 76855,
        "orderRegisteredOn": "2021-06-25T17:51:09.088Z",
        "itemsInCart": 12,
        "distance": 8,
        "weight": 4
    },
    {
        "orderId": "DT0041",
        "name": "Lakin Group",
        "customerId": 38353,
        "orderRegisteredOn": "2021-06-23T04:35:38.245Z",
        "itemsInCart": 11,
        "distance": 6,
        "weight": 9
    },
    {
        "orderId": "DT0042",
        "name": "Hermann, Larson and Schuster",
        "customerId": 94522,
        "orderRegisteredOn": "2021-06-28T06:40:34.617Z",
        "itemsInCart": 19,
        "distance": 4,
        "weight": 1
    },
    {
        "orderId": "DT0043",
        "name": "Lehner Inc",
        "customerId": 42946,
        "orderRegisteredOn": "2021-06-27T00:49:33.296Z",
        "itemsInCart": 9,
        "distance": 2,
        "weight": 7
    },
    {
        "orderId": "DT0044",
        "name": "Wilkinson LLC",
        "customerId": 45745,
        "orderRegisteredOn": "2021-06-29T19:14:36.597Z",
        "itemsInCart": 11,
        "distance": 0,
        "weight": 1
    },
    {
        "orderId": "DT0045",
        "name": "Hayes - Mueller",
        "customerId": 50117,
        "orderRegisteredOn": "2021-06-20T14:41:01.007Z",
        "itemsInCart": 6,
        "distance": 5,
        "weight": 6
    },
    {
        "orderId": "DT0046",
        "name": "Russel, Cassin and Carter",
        "customerId": 98826,
        "orderRegisteredOn": "2021-06-27T13:43:31.406Z",
        "itemsInCart": 15,
        "distance": 5,
        "weight": 0
    },
    {
        "orderId": "DT0047",
        "name": "Jones - Jast",
        "customerId": 28021,
        "orderRegisteredOn": "2021-06-20T19:54:17.652Z",
        "itemsInCart": 8,
        "distance": 8,
        "weight": 0
    },
    {
        "orderId": "DT0048",
        "name": "Ruecker Inc",
        "customerId": 37533,
        "orderRegisteredOn": "2021-06-22T15:11:43.897Z",
        "itemsInCart": 12,
        "distance": 4,
        "weight": 2
    },
    {
        "orderId": "DT0049",
        "name": "Conroy, Miller and Stark",
        "customerId": 14601,
        "orderRegisteredOn": "2021-06-24T17:06:13.022Z",
        "itemsInCart": 13,
        "distance": 9,
        "weight": 7
    },
    {
        "orderId": "DT0050",
        "name": "Senger LLC",
        "customerId": 55931,
        "orderRegisteredOn": "2021-06-21T07:57:15.459Z",
        "itemsInCart": 18,
        "distance": 3,
        "weight": 3
    },
    {
        "orderId": "DT0051",
        "name": "Gleichner, Pollich and Bergnaum",
        "customerId": 85638,
        "orderRegisteredOn": "2021-06-25T12:59:01.544Z",
        "itemsInCart": 18,
        "distance": 8,
        "weight": 5
    },
    {
        "orderId": "DT0052",
        "name": "Klocko LLC",
        "customerId": 89185,
        "orderRegisteredOn": "2021-06-27T10:32:47.112Z",
        "itemsInCart": 6,
        "distance": 0,
        "weight": 7
    },
    {
        "orderId": "DT0053",
        "name": "Kemmer - Howell",
        "customerId": 39191,
        "orderRegisteredOn": "2021-06-25T09:21:26.239Z",
        "itemsInCart": 13,
        "distance": 0,
        "weight": 1
    },
    {
        "orderId": "DT0054",
        "name": "Muller, Kirlin and Mohr",
        "customerId": 19288,
        "orderRegisteredOn": "2021-06-26T14:30:27.943Z",
        "itemsInCart": 2,
        "distance": 0,
        "weight": 1
    },
    {
        "orderId": "DT0055",
        "name": "Lueilwitz - Yundt",
        "customerId": 56287,
        "orderRegisteredOn": "2021-06-29T04:35:24.223Z",
        "itemsInCart": 12,
        "distance": 0,
        "weight": 2
    },
    {
        "orderId": "DT0056",
        "name": "McLaughlin - Monahan",
        "customerId": 60208,
        "orderRegisteredOn": "2021-06-28T19:37:56.089Z",
        "itemsInCart": 12,
        "distance": 8,
        "weight": 1
    },
    {
        "orderId": "DT0057",
        "name": "Luettgen LLC",
        "customerId": 64158,
        "orderRegisteredOn": "2021-06-24T05:04:37.514Z",
        "itemsInCart": 9,
        "distance": 1,
        "weight": 9
    },
    {
        "orderId": "DT0058",
        "name": "Smith Group",
        "customerId": 75173,
        "orderRegisteredOn": "2021-06-24T10:37:09.083Z",
        "itemsInCart": 0,
        "distance": 4,
        "weight": 9
    },
    {
        "orderId": "DT0059",
        "name": "Beatty - Anderson",
        "customerId": 95515,
        "orderRegisteredOn": "2021-06-22T16:10:25.359Z",
        "itemsInCart": 11,
        "distance": 8,
        "weight": 2
    },
    {
        "orderId": "DT0060",
        "name": "Herman, Schaden and Greenfelder",
        "customerId": 67199,
        "orderRegisteredOn": "2021-06-29T13:00:03.515Z",
        "itemsInCart": 18,
        "distance": 7,
        "weight": 2
    },
    {
        "orderId": "DT0061",
        "name": "Mayer Group",
        "customerId": 70191,
        "orderRegisteredOn": "2021-06-29T22:48:25.926Z",
        "itemsInCart": 18,
        "distance": 1,
        "weight": 7
    },
    {
        "orderId": "DT0062",
        "name": "Champlin, Yost and Goldner",
        "customerId": 85419,
        "orderRegisteredOn": "2021-06-28T04:02:06.946Z",
        "itemsInCart": 14,
        "distance": 9,
        "weight": 0
    },
    {
        "orderId": "DT0063",
        "name": "Wisoky - Hirthe",
        "customerId": 22529,
        "orderRegisteredOn": "2021-06-28T00:43:33.036Z",
        "itemsInCart": 14,
        "distance": 8,
        "weight": 3
    },
    {
        "orderId": "DT0064",
        "name": "Romaguera, Franecki and Gottlieb",
        "customerId": 97602,
        "orderRegisteredOn": "2021-06-27T20:14:25.924Z",
        "itemsInCart": 11,
        "distance": 8,
        "weight": 5
    },
    {
        "orderId": "DT0065",
        "name": "Veum and Sons",
        "customerId": 49443,
        "orderRegisteredOn": "2021-06-22T07:37:45.773Z",
        "itemsInCart": 17,
        "distance": 8,
        "weight": 0
    },
    {
        "orderId": "DT0066",
        "name": "Luettgen LLC",
        "customerId": 73602,
        "orderRegisteredOn": "2021-06-23T02:48:18.079Z",
        "itemsInCart": 0,
        "distance": 1,
        "weight": 1
    },
    {
        "orderId": "DT0067",
        "name": "Ruecker Group",
        "customerId": 64694,
        "orderRegisteredOn": "2021-06-27T05:57:46.739Z",
        "itemsInCart": 17,
        "distance": 1,
        "weight": 9
    },
    {
        "orderId": "DT0068",
        "name": "Lakin, Harvey and Mayer",
        "customerId": 83870,
        "orderRegisteredOn": "2021-06-21T15:57:15.369Z",
        "itemsInCart": 3,
        "distance": 5,
        "weight": 5
    },
    {
        "orderId": "DT0069",
        "name": "Corkery - Hoeger",
        "customerId": 86765,
        "orderRegisteredOn": "2021-06-23T08:06:44.894Z",
        "itemsInCart": 1,
        "distance": 5,
        "weight": 7
    },
    {
        "orderId": "DT0070",
        "name": "Rolfson - O'Keefe",
        "customerId": 85458,
        "orderRegisteredOn": "2021-06-27T04:00:58.066Z",
        "itemsInCart": 19,
        "distance": 4,
        "weight": 5
    },
    {
        "orderId": "DT0071",
        "name": "Pagac - Quigley",
        "customerId": 90337,
        "orderRegisteredOn": "2021-06-25T14:14:10.597Z",
        "itemsInCart": 8,
        "distance": 4,
        "weight": 3
    },
    {
        "orderId": "DT0072",
        "name": "Kshlerin and Sons",
        "customerId": 98540,
        "orderRegisteredOn": "2021-06-23T01:30:47.174Z",
        "itemsInCart": 7,
        "distance": 7,
        "weight": 7
    },
    {
        "orderId": "DT0073",
        "name": "Ondricka - Sanford",
        "customerId": 32145,
        "orderRegisteredOn": "2021-06-27T08:54:07.118Z",
        "itemsInCart": 18,
        "distance": 3,
        "weight": 3
    },
    {
        "orderId": "DT0074",
        "name": "Dibbert, Runolfsson and Schroeder",
        "customerId": 36973,
        "orderRegisteredOn": "2021-06-23T19:03:25.332Z",
        "itemsInCart": 5,
        "distance": 0,
        "weight": 8
    },
    {
        "orderId": "DT0075",
        "name": "Ankunding Inc",
        "customerId": 45955,
        "orderRegisteredOn": "2021-06-24T18:25:18.839Z",
        "itemsInCart": 5,
        "distance": 3,
        "weight": 3
    },
    {
        "orderId": "DT0076",
        "name": "Hamill - Franecki",
        "customerId": 41300,
        "orderRegisteredOn": "2021-06-27T20:14:06.045Z",
        "itemsInCart": 4,
        "distance": 3,
        "weight": 3
    },
    {
        "orderId": "DT0077",
        "name": "Mraz, Ortiz and Nader",
        "customerId": 29667,
        "orderRegisteredOn": "2021-06-28T18:50:57.581Z",
        "itemsInCart": 17,
        "distance": 6,
        "weight": 4
    },
    {
        "orderId": "DT0078",
        "name": "Grant - Turcotte",
        "customerId": 47364,
        "orderRegisteredOn": "2021-06-21T20:13:49.723Z",
        "itemsInCart": 18,
        "distance": 9,
        "weight": 6
    },
    {
        "orderId": "DT0079",
        "name": "Rosenbaum LLC",
        "customerId": 82248,
        "orderRegisteredOn": "2021-06-24T08:16:29.299Z",
        "itemsInCart": 6,
        "distance": 1,
        "weight": 1
    },
    {
        "orderId": "DT0080",
        "name": "Quitzon and Sons",
        "customerId": 90533,
        "orderRegisteredOn": "2021-06-28T23:38:59.441Z",
        "itemsInCart": 15,
        "distance": 9,
        "weight": 5
    },
    {
        "orderId": "DT0081",
        "name": "Gaylord, Keeling and Turcotte",
        "customerId": 86191,
        "orderRegisteredOn": "2021-06-29T05:45:05.363Z",
        "itemsInCart": 2,
        "distance": 8,
        "weight": 6
    },
    {
        "orderId": "DT0082",
        "name": "Luettgen LLC",
        "customerId": 74360,
        "orderRegisteredOn": "2021-06-22T02:19:13.423Z",
        "itemsInCart": 14,
        "distance": 5,
        "weight": 6
    },
    {
        "orderId": "DT0083",
        "name": "Homenick Inc",
        "customerId": 27873,
        "orderRegisteredOn": "2021-06-27T05:57:53.794Z",
        "itemsInCart": 17,
        "distance": 2,
        "weight": 7
    },
    {
        "orderId": "DT0084",
        "name": "Trantow - Herman",
        "customerId": 60297,
        "orderRegisteredOn": "2021-06-29T10:27:42.365Z",
        "itemsInCart": 9,
        "distance": 0,
        "weight": 5
    },
    {
        "orderId": "DT0085",
        "name": "Metz Group",
        "customerId": 74300,
        "orderRegisteredOn": "2021-06-26T21:44:32.073Z",
        "itemsInCart": 12,
        "distance": 7,
        "weight": 8
    },
    {
        "orderId": "DT0086",
        "name": "Keebler - Treutel",
        "customerId": 58776,
        "orderRegisteredOn": "2021-06-28T06:56:45.921Z",
        "itemsInCart": 13,
        "distance": 1,
        "weight": 2
    },
    {
        "orderId": "DT0087",
        "name": "Lebsack - Ryan",
        "customerId": 80140,
        "orderRegisteredOn": "2021-06-26T10:21:56.765Z",
        "itemsInCart": 18,
        "distance": 6,
        "weight": 0
    },
    {
        "orderId": "DT0088",
        "name": "Schuppe, Blanda and Ritchie",
        "customerId": 94807,
        "orderRegisteredOn": "2021-06-28T08:16:40.764Z",
        "itemsInCart": 14,
        "distance": 6,
        "weight": 0
    },
    {
        "orderId": "DT0089",
        "name": "Kerluke Inc",
        "customerId": 17992,
        "orderRegisteredOn": "2021-06-20T15:21:02.539Z",
        "itemsInCart": 0,
        "distance": 0,
        "weight": 6
    },
    {
        "orderId": "DT0090",
        "name": "Gislason, Gottlieb and Wisozk",
        "customerId": 15213,
        "orderRegisteredOn": "2021-06-28T22:57:23.261Z",
        "itemsInCart": 9,
        "distance": 2,
        "weight": 4
    },
    {
        "orderId": "DT0091",
        "name": "Buckridge - Hyatt",
        "customerId": 80621,
        "orderRegisteredOn": "2021-06-24T05:14:18.373Z",
        "itemsInCart": 12,
        "distance": 3,
        "weight": 9
    },
    {
        "orderId": "DT0092",
        "name": "Hackett, Schiller and Bayer",
        "customerId": 79958,
        "orderRegisteredOn": "2021-06-23T08:49:17.098Z",
        "itemsInCart": 18,
        "distance": 0,
        "weight": 9
    },
    {
        "orderId": "DT0093",
        "name": "Monahan, Deckow and Toy",
        "customerId": 81182,
        "orderRegisteredOn": "2021-06-25T14:17:12.264Z",
        "itemsInCart": 11,
        "distance": 7,
        "weight": 5
    },
    {
        "orderId": "DT0094",
        "name": "Anderson - Larkin",
        "customerId": 44283,
        "orderRegisteredOn": "2021-06-25T02:23:22.952Z",
        "itemsInCart": 8,
        "distance": 5,
        "weight": 3
    },
    {
        "orderId": "DT0095",
        "name": "Zboncak - Green",
        "customerId": 75435,
        "orderRegisteredOn": "2021-06-22T14:35:31.189Z",
        "itemsInCart": 2,
        "distance": 6,
        "weight": 6
    },
    {
        "orderId": "DT0096",
        "name": "Stark - Abshire",
        "customerId": 83828,
        "orderRegisteredOn": "2021-06-27T16:18:14.337Z",
        "itemsInCart": 5,
        "distance": 3,
        "weight": 7
    },
    {
        "orderId": "DT0097",
        "name": "Ritchie, Prohaska and Zieme",
        "customerId": 34285,
        "orderRegisteredOn": "2021-06-23T12:04:03.691Z",
        "itemsInCart": 18,
        "distance": 1,
        "weight": 4
    },
    {
        "orderId": "DT0098",
        "name": "Kunde Inc",
        "customerId": 78618,
        "orderRegisteredOn": "2021-06-23T18:40:52.790Z",
        "itemsInCart": 2,
        "distance": 1,
        "weight": 7
    },
    {
        "orderId": "DT0099",
        "name": "West - Hodkiewicz",
        "customerId": 29849,
        "orderRegisteredOn": "2021-06-24T08:33:46.656Z",
        "itemsInCart": 0,
        "distance": 3,
        "weight": 6
    }
]
 */
