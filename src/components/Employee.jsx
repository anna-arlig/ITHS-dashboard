import styles from "../styles/employee.module.css";


const user = {
    "gender": "male",
    "name": {
        "title": "Mr",
        "first": "Fabio",
        "last": "Francois"
    },
    "location": {
        "street": {
            "number": 9994,
            "name": "Rue Abel-Ferry"
        },
        "city": "Marseille",
        "state": "Jura",
        "country": "France",
        "postcode": 44366,
        "coordinates": {
            "latitude": "2.5448",
            "longitude": "-45.4905"
        },
        "timezone": {
            "offset": "-9:00",
            "description": "Alaska"
        }
    },
    "email": "fabio.francois@example.com",
    "login": {
        "uuid": "451f5786-60a3-4702-866f-8e70801959a1",
        "username": "greenzebra579",
        "password": "gryphon",
        "salt": "AaMoCbiG",
        "md5": "7f34fa201a5a9425f32492a92b00e707",
        "sha1": "4e6b5695931b3b2344a559290ae291710d14f572",
        "sha256": "54bd700f8231ddce5a3f8a5550dfc7d3a4a265057c897a120ad81c8cc3800377"
    },
    "dob": {
        "date": "1994-04-28T08:20:42.482Z",
        "age": 28
    },
    "registered": {
        "date": "2010-01-11T21:25:32.406Z",
        "age": 12
    },
    "phone": "03-01-53-56-09",
    "cell": "06-45-84-67-88",
    "id": {
        "name": "INSEE",
        "value": "1NNaN65221849 54"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/4.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
    },
    "nat": "FR"
}
const Employee = () => {

  // const [employee, setEmployee] = useState(user)

  // useEffect(()=>{
  //   fetch("https://randomuser.me/api/").then(res => res.json()).then(data => console.log(data.results[0]))
  // },[])

  return (
    <div className={`${styles.main} main`}>
      {user && (
        <div className={styles.card}>
          <h3>Employee of the month!</h3>
          <div className={styles.neonWrapper}>
            <span className={styles.txt}>
              {user.name.title}. {user.name.first} {user.name.last}
            </span>
            <span className={styles.gradient}></span>
            <span className={styles.dodge}></span>
          </div>

          <img src={user.picture.large} className={styles.img} alt="" />
          <div className={styles.contributions}>
            <div>
              <h4>2067</h4>
              <h4>Commits/Mo</h4>
            </div>
            <div>
              <h4>70 Cups</h4>
              <h4>coffe/day</h4>
            </div>
            <div>
              <h4>0</h4>
              <h4>Vacations</h4>
            </div>
            <div>
              <h4>0</h4>
              <h4>Holidays</h4>
            </div>
            <div>
              <h4>7-9 years</h4>
              <h4>Estimated life</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
