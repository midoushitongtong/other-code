import 'dart:convert' as convert;
import 'package:http/http.dart' as http;
import 'package:date_format/date_format.dart';

void main() async {
  var url = new Uri.https('news-at.zhihu.com', '/api/3/stories/latest');

  var response = await http.get(url);

  if (response.statusCode == 200) {
    var result = convert.jsonDecode(response.body);
    print(result['date']);
  } else {
    print('Request failed');
  }

  print(formatDate(DateTime(2021, 1, 1), [yyyy, '-', mm, '-', dd]));
}
