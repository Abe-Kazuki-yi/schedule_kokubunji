error id: 5D1591FB9F30137D3E351955E6459463
file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
### java.lang.StringIndexOutOfBoundsException: offset 1079, count -6, length 1663

occurred in the presentation compiler.



action parameters:
offset: 1099
uri: file://<WORKSPACE>/src/main/scala/repository/UserRepository.scala
text:
```scala
package reporitory
import slick.jdbc.PostgresProfile.api._
import scala.concurrent.{Future, ExecutionContext}
import javax.inject.{Inject, Singleton}
import table.UserTable
import struct.RoleEnum._
import struct.AccountTypeEnum._
import model.User
/*
 * ===========================================================
 *  ファイル名 : UserRepository.scala
 *  概要       : Userの情報を使った処理を提供するservice
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-09
 * ===========================================================
 */

/**
 * Userテーブルとの処理を提供するクラス
 * @param users UserTableの基本的な処理が入ったTableQurey型
 */
@Singleton
class UserRepository @Inject()(db: Database)(implicit ec: ExecutionContext) {

    private val users : TableQuery[UserTable] = UserTable.methods

    /**
     * @brief userテーブルへの非同期新規インサート
     * @param mail emailかgmail
     * @param password ハッシュ化されたパスワード
     * @param role 権限
     * @return インサートしたデータ数。成功した場合は1。
     * @note パスワードがハッシュ化されているかをチェックする機構はない
     */
    def createUser(mail: String, password: String, role: Role): Future[Int] = {
        val user : User = User(0L, mail, password, ,@@role)
        db.run(users += user)
    }

    /**
     * @brief userテーブルをusernameで検索する
     * @param email emailアドレス
     * @return 最初にemailが一致したレコード
     */
    def findByEmail(email: String): Future[Option[User]] = {
        db.run(users.filter(_.email === email).result.headOption)
    }

    /**
     * @brief userテーブルをusernameで検索する
     * @param googleId googleの個人番号
     * @return 最初にgoogleIdが一致したレコード
     */
    def findByGoogleId(googleId: String): Future[Option[User]] = {
        db.run(users.filter(_.googleId === googleId).result.headOption)
    }
}
```


presentation compiler configuration:
Scala version: 2.12.20
Classpath:
<HOME>/.cache/coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.12.20/scala-library-2.12.20.jar [exists ]
Options:





#### Error stacktrace:

```
java.base/java.lang.String.checkBoundsOffCount(String.java:4591)
	java.base/java.lang.String.rangeCheck(String.java:304)
	java.base/java.lang.String.<init>(String.java:300)
	scala.tools.nsc.interactive.Global.typeCompletions$1(Global.scala:1231)
	scala.tools.nsc.interactive.Global.completionsAt(Global.scala:1254)
	scala.meta.internal.pc.SignatureHelpProvider.$anonfun$treeSymbol$1(SignatureHelpProvider.scala:462)
	scala.Option.map(Option.scala:230)
	scala.meta.internal.pc.SignatureHelpProvider.treeSymbol(SignatureHelpProvider.scala:460)
	scala.meta.internal.pc.SignatureHelpProvider$MethodCall$.unapply(SignatureHelpProvider.scala:255)
	scala.meta.internal.pc.SignatureHelpProvider$MethodCallTraverser.visit(SignatureHelpProvider.scala:366)
	scala.meta.internal.pc.SignatureHelpProvider$MethodCallTraverser.traverse(SignatureHelpProvider.scala:360)
	scala.meta.internal.pc.SignatureHelpProvider$MethodCallTraverser.fromTree(SignatureHelpProvider.scala:329)
	scala.meta.internal.pc.SignatureHelpProvider.$anonfun$signatureHelp$3(SignatureHelpProvider.scala:33)
	scala.Option.flatMap(Option.scala:271)
	scala.meta.internal.pc.SignatureHelpProvider.$anonfun$signatureHelp$2(SignatureHelpProvider.scala:31)
	scala.Option.flatMap(Option.scala:271)
	scala.meta.internal.pc.SignatureHelpProvider.signatureHelp(SignatureHelpProvider.scala:29)
	scala.meta.internal.pc.ScalaPresentationCompiler.$anonfun$signatureHelp$1(ScalaPresentationCompiler.scala:434)
	scala.meta.internal.pc.CompilerAccess.withSharedCompiler(CompilerAccess.scala:148)
	scala.meta.internal.pc.CompilerAccess.$anonfun$withNonInterruptableCompiler$1(CompilerAccess.scala:132)
	scala.meta.internal.pc.CompilerAccess.$anonfun$onCompilerJobQueue$1(CompilerAccess.scala:209)
	scala.meta.internal.pc.CompilerJobQueue$Job.run(CompilerJobQueue.scala:152)
	java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
	java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
	java.base/java.lang.Thread.run(Thread.java:840)
```
#### Short summary: 

java.lang.StringIndexOutOfBoundsException: offset 1079, count -6, length 1663