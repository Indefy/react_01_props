const Vacation = ({ availabe }) => {
    if (availabe=true) {
        const passed = "Going on vacation";
        const rejected = "Too busy for Vacations";
        return passed;
    }
    else{
      return  rejected
    }
}
export default Vacation