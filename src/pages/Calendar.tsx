function Calendar() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FIndiana%2FIndianapolis&showPrint=0&showTitle=0&showCalendars=0&mode=WEEK&src=amFlY29iLmQxQGdtYWlsLmNvbQ&src=YjJtZDlyNmtmaWE1Y2RqM3Vzc2FwNDM2NWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Yzk0M2RiNzVkY2E5YTc0Nzk4MGNkNjIyMWU4YjI2YWMyNjc5YWFiYjI3YTIyNTUyOWI1ZDY1MmFjNmQ3MTI3Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=d29ybGRpbWFnZW1hcmtldGluZ0BnbWFpbC5jb20&color=%23039BE5&color=%239E69AF&color=%233F51B5&color=%230B8043&color=%23A79B8E"
        style={{ borderWidth: 0 }}
        // width="800"
        // height="600"
        className="w-full h-[600px]"
        // frameborder={0}
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Calendar;
