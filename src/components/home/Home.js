import "./Home.css"

const Home = ()=>{
    return (
        <div>
          <div>
            <img src="/image/background_image.jpg" alt="hình ảnh nền" id="background-image"/>
          </div>
          <div id="introduction">
              <div id="introduction-text">
                  <p style={{text_align: "center"}}>Giới thiệu về công ty</p>
                  <ul>
                    <li>Công ty … là một công ty chuyên cung cấp ….</li>
                    <li>Trong bối cảnh xã hội hiện nay….. thì một trong số những dịch vụ đang được ưa chuộng, là một trong số những dịch vụ cần thiết nhất hiện nay đó chính là dịch vụ ……. </li>
                    <li>Nếu như bạn đang có nhu cầu sử dụng dịch vụ…. mà vẫn chưa tìm được công ty nào thích hợp thì bạn hoàn toàn có thể tìm đến với doanh nghiệp chúng tôi…..</li>
                    <li>Khác với rất nhiều các công ty dịch vụ khách thêm thị trường………</li>
                    <li>Bên cạnh đó, chúng tôi vẫn luôn hoàn thiện, cải tiến hằng ngày để phù hợp hơn với khách hàng. Với đội ngũ nhân viên năng động, sáng tạo cập nhập không hư nghỉ.</li>
                    <li>Với lãnh đạo có kinh nghiệm nhiều năm trong lĩnh vực……. cùng với tiêu chí hoạt động…… chúng tôi đảm bảo bạn có thể có được những trải nghiệm tuyệt vời nhất khi, sử dụng các dịch vụ của chúng tôi.</li>
                    <li>Với sứ mệnh…… nhân viên công ty không ngừng cố gắng. Lãnh đạo công ty không ngừng học hỏi hằng ngày để có thể đáp ứng được nhu cầu của khách hàng, đem đến cho khách hàng những dịch vụ tốt nhất.</li>
                  </ul>
              </div>
              <div>
                <img src="/image/company_image.jpg" alt="hình ảnh công ty"/>
              </div>
          </div>
        </div>
    );
}

export default Home;