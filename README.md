<!DOCTYPE html>
<html>

<body lang="es-MX" link="#000080" vlink="#800000" dir="ltr"><p align="center" style="line-height: 100%; margin-bottom: 0cm">
<font size="3" style="font-size: 12pt"><b>Verificador de precios</b></font></p>
<p align="center" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt">Proyecto
de verificador de precios desarrollado en react native para android</font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt">Crear
proyecto:</font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><b>npx
@react-native-community/cli@latest init PriceCkecker</b></font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt">Versiones
usadas:</font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font color="#000000"><span style="background: transparent">&nbsp;
&nbsp; <font size="3" style="font-size: 12pt"><b><font face="Consolas, Courier New, monospace">&quot;react&quot;:
&quot;18.3.1&quot;,</font></b></font></span></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font color="#000000"><span style="background: transparent">&nbsp;
&nbsp;<font size="3" style="font-size: 12pt"><b><font face="Consolas, Courier New, monospace">&quot;react-native&quot;:
&quot;0.76.6&quot;,</font></b></font></span></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">Limpiar
el proyecto android</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">moverser
al siguiente directorio C:\PROGRAMACION\React
Native\PriceCkecker\android&gt;</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">ejecutar
el siguiente comando gradlew clean</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font color="#000000"><font size="3" style="font-size: 12pt"><span style="background: transparent"><font face="Consolas, Courier New, monospace"><span style="font-weight: normal">Instalar
librería</span></font><font face="Consolas, Courier New, monospace"><b>
</b></font><font face="Consolas, Courier New, monospace"><b>react
navigation</b></font></span></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font color="#000000"><span style="background: transparent"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><b>url
documentacion de la librería:</b></font></font><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="font-weight: normal">
<a href="https://reactnavigation.org/docs/getting-started">https://reactnavigation.org/docs/getting-started</a></span></font></font></span></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><b><span style="background: transparent">Instalacion</span></b></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">npm
install @react-navigation/native</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><b><span style="background: transparent">Instalar
dependencias</span></b></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">npm
install react-native-screens react-native-safe-area-context</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><font color="#000000"><font face="Consolas, Courier New, monospace"><span style="text-decoration: none"><span style="font-weight: normal"><span style="background: transparent">agregar
el siguiente codigo a la clase </span></span></span></font></font><font face="Consolas, Courier New, monospace">MainActivity
</font></font>
</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><b><span style="background: transparent"><span style="font-variant: normal"><font color="#00009f"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">class</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">
MainActivity: </span></span></font></font></span><span style="font-variant: normal"><font color="#d73a49"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">ReactActivity</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">()
{<br/>
</span></span></font></font></span><span style="font-variant: normal"><font color="#999988"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><i>//
...</i></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal"><br/>
</span></span></font></font></span><span style="font-variant: normal"><font color="#00009f"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">override</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">
</span></span></font></font></span><span style="font-variant: normal"><font color="#00009f"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">fun</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">
</span></span></font></font></span><span style="font-variant: normal"><font color="#d73a49"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">onCreate</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">(savedInstanceState:
Bundle?) {<br/>
</span></span></font></font></span><span style="font-variant: normal"><font color="#00009f"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">super</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">.</span></span></font></font></span><span style="font-variant: normal"><font color="#d73a49"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">onCreate</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">(</span></span></font></font></span><span style="font-variant: normal"><font color="#00009f"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">null</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal">)<br/>
}<br/>
</span></span></font></font></span><span style="font-variant: normal"><font color="#999988"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><i>//
...</i></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span style="font-style: normal"><br/>
}</span></span></font></font></span>
</span></b></font>
</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><b><span style="background: transparent">Ademas
agregar la importacion</span></b></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
android.os.Bundle;</span></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">La
clase queda de la siguiente manera:</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">package
com.priceckecker</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
android.os.Bundle;</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
com.facebook.react.ReactActivity</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
com.facebook.react.ReactActivityDelegate</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled</span></font></font></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">import
com.facebook.react.defaults.DefaultReactActivityDelegate</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">class
MainActivity : ReactActivity() {</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">  
<font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">override
fun onCreate(savedInstanceState: Bundle?) {</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   
<font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">super.onCreate(null)</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">  <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">}</font></font></span></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">  <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">/**</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*
Returns the name of the main component registered from JavaScript.
This is used to schedule</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*
rendering of the component.</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*/</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent"> 
<font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">override
fun getMainComponentName(): String = &quot;PriceCkecker&quot;</font></font></span></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">  <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">/**</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*
Returns the instance of the [ReactActivityDelegate]. We use
[DefaultReactActivityDelegate]</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*
which allows you to enable New Architecture with a single boolean
flags [fabricEnabled]</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">   <font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">*/</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent"> 
<font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">override
fun createReactActivityDelegate(): ReactActivityDelegate =</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><span style="background: transparent">     
<font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt">DefaultReactActivityDelegate(this,
mainComponentName, fabricEnabled)</font></font></span></font></p>
<p style="font-weight: normal; line-height: 0.5cm; margin-bottom: 0cm">
<font color="#000000"><font face="Consolas, Courier New, monospace"><font size="3" style="font-size: 12pt"><span style="background: transparent">}</span></font></font></font></p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 0.5cm; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<font size="3" style="font-size: 12pt"><b>Instalar la librería stack
navigator</b></font></p>
<p style="line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<font size="3" style="font-size: 12pt">npm install
@react-navigation/native-stack</font></p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<font size="3" style="font-size: 12pt"><b>Libreria de permisos para
poder usar la camara</b></font></p>
<p style="line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<font size="3" style="font-size: 12pt">url de la librería
</font><a href="https://github.com/zoontek/react-native-permissions"><font face="Calibri"><font size="3" style="font-size: 12pt"><span lang="es-ES">https://github.com/zoontek/react-native-permissions</span></font></font></a></p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
 <font size="3" style="font-size: 12pt">npm i -S
react-native-permissions</font></p>
<p style="font-weight: normal; line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><span style="text-decoration: none"><span style="font-weight: normal">Editar
el archivo </span></span><span style="font-variant: normal"><font color="#1f2328"><font face="ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">android/app/src/main/AndroidManifest.xml</span></span></span></font></font></span>
 y añadir la siguiente linea</font></p>
<pre class="western" style="font-variant: normal; letter-spacing: normal; font-style: normal; font-weight: normal"><font color="#1f2328"><font face="var fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace"><font size="3" style="font-size: 12pt">&lt;uses-permission android:name=&quot;android.permission.CAMERA&quot; /&gt;</font></font></font></pre><p style="line-height: 100%; margin-bottom: 0cm">
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt">librería
para poder acceder a la camara</font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt">url
de la librería </font><a href="https://react-native-vision-camera.com/docs/guides"><font face="Calibri"><font size="3" style="font-size: 12pt"><span lang="es-ES">https://react-native-vision-camera.com/docs/guides</span></font></font></a></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm; text-decoration: none">
<font face="Calibri"><font size="3" style="font-size: 12pt">instalar
la librería </font></font>
</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><span style="font-variant: normal"><font face="SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span lang="es-ES"><span style="font-style: normal"><span style="font-weight: normal">npm</span></span></span></span></font></span><span style="font-variant: normal"><font color="#393a34"><font face="Calibri"><span style="letter-spacing: normal"><span lang="es-ES">
</span></span></font></font></span><span style="font-variant: normal"><font color="#393a34"><font face="SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span lang="es-ES"><span style="font-style: normal"><span style="font-weight: normal">i
react-native-vision-camera</span></span></span></span></font></font></span><font face="Calibri"><span lang="es-ES">
</span></font></font>
</p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0cm"><font size="3" style="font-size: 12pt"><font face="Calibri"><span lang="es-ES">abrir
el archivo </span></font><span style="font-variant: normal"><font color="#1c1e21"><font face="SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"><span style="letter-spacing: normal"><span lang="es-ES"><span style="font-style: normal"><span style="font-weight: normal">AndroidManifest.xml</span></span></span></span></font></font></span><font face="Calibri"><span lang="es-ES">
</span></font><font face="Calibri"><span lang="es-ES"> y añadir
estas lineas</span></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt">&lt;uses-permission
android:name=&quot;android.permission.CAMERA&quot; /&gt;</font></font></p>
<p style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt">&lt;!--
optionally, if you want to record audio: --&gt;</font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt">&lt;uses-permission
android:name=&quot;android.permission.RECORD_AUDIO&quot; /&gt;</font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt">Instalar
librería axios</font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>npm
install axios</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>Ejecutar
la app</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="font-weight: normal; line-height: 100%; margin-bottom: 0cm">
<font face="Calibri"><font size="3" style="font-size: 12pt">npm start</font></font></p>
<p lang="es-ES" style="font-weight: normal; line-height: 100%; margin-bottom: 0cm">
<font face="Calibri"><font size="3" style="font-size: 12pt">presionar
a para inicar la app en android</font></font></p>
<p lang="es-ES" style="font-weight: normal; line-height: 100%; margin-bottom: 0cm">
<br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>Pantallas</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>

</p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>Lee
el codigo de barras con la camara del celular.</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><img src="img/3.jpg" name="Imagen1" align="left" width="273" height="433" border="0"/>
<br/>

<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>Muestra
la información del producto</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><img src="img/1.jpg" name="Imagen3" align="left" width="334" height="448" border="0"/>


</p>

<br/>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><font face="Calibri"><font size="3" style="font-size: 12pt"><b>Cambia la url</b></font></font></p>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><br/>
<p lang="es-ES" style="line-height: 100%; margin-bottom: 0cm"><img src="/img/3.jpeg" name="Imagen2" align="left" width="302" height="481" border="0"/>
<br/>

</body>
</html>