function changeMessage() {
    const messageElement = document.getElementById('message');
    const detailsElement = document.getElementById('details');
    
    // Thay đổi thông điệp khi nhấn nút
    messageElement.innerHTML = "Chúc anh lấy vợ xong sớm sinh quý tử !";
    detailsElement.innerHTML = "Chúc bạn một năm mới đầy may mắn và thành công trong mọi lĩnh vực!";
    
    // Thêm hiệu ứng thay đổi màu sắc
    document.querySelector('.card').style.backgroundColor = "#98fb98";  // Màu xanh lá mạ
    messageElement.style.color = "#006400";  // Màu xanh lá cây đậm
    detailsElement.style.color = "#008080";  // Màu xanh biển
}
