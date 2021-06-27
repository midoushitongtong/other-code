import 'dart:io';
import 'dart:convert';

Future<String> getData() async {
  // 创建 HttpClient
  HttpClient httpClient = new HttpClient();
  // 创建 Uri
  Uri uri = new Uri.https('news-at.zhihu.com', 'api/3/stories/latest');
  // 发起请求, 等待请求
  HttpClientRequest request = await httpClient.getUrl(uri);
  // 关闭请求, 等待响应
  HttpClientResponse response = await request.close();
  // 解码响应内容
  return await response.transform(utf8.decoder).join();
}

Future<String> test() {
  return Future.delayed(Duration(seconds: 1), () => 'hello');
}

void main() async {
  // String result = await getData();
  // print(result);

  print(await test());
}
