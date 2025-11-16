error id: file://<WORKSPACE>/src/main/scala/module/ClockModule.scala:
file://<WORKSPACE>/src/main/scala/module/ClockModule.scala
empty definition using pc, found symbol in pc: 
empty definition using semanticdb
empty definition using fallback
non-local guesses:
	 -ClockModule#
	 -scala/Predef.ClockModule#
offset: 97
uri: file://<WORKSPACE>/src/main/scala/module/ClockModule.scala
text:
```scala
package module

import com.google.inject.AbstractModule
import java.time.Clock

class ClockModule@@ extends AbstractModule {
  override def configure(): Unit = {
    bind(classOf[Clock]).toInstance(Clock.systemUTC())
  }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: 