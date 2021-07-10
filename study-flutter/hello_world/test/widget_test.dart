import 'package:flutter_test/flutter_test.dart';

import 'package:hello_world/1.container_and_text/main.dart';

void main() {
  testWidgets('Counter increments smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(App());

    // Verify that title
    expect(find.text('Home Page'), findsOneWidget);
    expect(find.text('1'), findsNothing);
  });
}
