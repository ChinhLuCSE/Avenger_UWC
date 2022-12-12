import "./Home.css"

const Home = ()=>{
    return (
        <div className="home">
          <div>
            <img src="/image/background_image.jpg" alt="hình ảnh nền" style={{width: "90%", height: "auto", margin: "0 auto", display: "block"}}/>
          </div>
          <div style={{width: "100%", display: "flex", justify_content: "center", margin: "50px 0px 0px 0px"}}>
              <div style={{width:"50%", margin: "0px 0px 0px 10%"}}>
                  <p style={{text_align: "center"}}>Giới thiệu về công ty</p>
                  <p>Cuộc sống là một trường đua và thì giờ là vàng, là bạc. Nhưng con người không phải là một cỗ máy vô cảm, con người có tâm hồn được tạo nên từ vô vàn những mảng màu, những cung bậc cảm xúc nối tiếp nhau: buồn – vui, thất vọng – hi vọng, chán nản – hạnh phúc, khinh ghét – yêu thương… Giữa những nốt bổng và nốt trầm, giữa lúc vui mà không mải mê, chủ quan, ta có những “nốt lặng”. Nốt lặng đó không vang thành lời, nó cho con người, cho tuổi trẻ thời gian để “Sống chậm lại, nghĩ khác đi và yêu thương nhiều hơn”. Dù là một giây, một phút thôi nhưng nó nạp cho ta năng lượng sống cả cuộc đời.</p>
              </div>
              <div>
                <img src="/image/company_image.jpg" alt="hình ảnh công ty" style={{width: "60%", height: "auto", margin: "0 auto", display: "block"}}/>
              </div>
          </div>
        </div>
    );
}

export default Home;