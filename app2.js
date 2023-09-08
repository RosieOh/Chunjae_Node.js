fs.readdir('./data', function(error, filelist){        
    var filteredId = path.parse(queryData.id).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = queryData.id;
      var list = template.list(filelist);
      var html = template.HTML(title, list,
        `
        <form action="/update_pro" method="post" style="padding:10px; display:flex; flex-direction: column;">
          <input type="hidden" name="id" value="${title}">  
          <p>제목</p>
          <input type="text" name="title" placeholder="title" value="${title}" class="textinput">
          <p>내용</p>
          <textarea name="description" placeholder="description" class="textinput" rows="5">${description}</textarea><br>              
          <input type="submit" value="완료" class="btn">              
        </form>
        `,
        `<div class="btncover">
        <a class="btn" href="/create">글 작성</a>
        <a class="btn" href="/update?id=${title}">글 수정</a></div>`
      );
      response.writeHead(200);
      response.end(html);
    });
  });