<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
<head>
<style type="text/css">
					body {
						font-family: Helvetica, Arial, sans-serif;
						font-size: 17px;
						color: #545353;
					}
					table {
						border: 1px solid #ccc;
						border-collapse: collapse;
						height:400px;
					}
					#sitemap  tr:hover {
						background-color: #ccc;
					}
					#sitemap  tr:hover td, #sitemap tr:hover td a {
						color: #000;
					}
					
					td {
						padding:10px;
						font-size:15px;
					}
					th {
						padding-left:10px;
						padding-right:30px;
						font-size:17px;
					}
					
				</style>
</head>
<body>
<h1 align="center">Site map</h1>
	<table border="1" id="sitemap" align="center">
		<tr>
			<th>Location</th>
			<th>Change Frequency</th>
			<th>Priority</th>
			
		</tr>
		
		<xsl:for-each select="urlset/url">
			<tr>
						<td><xsl:value-of select="loc" /></td>
						<td ><xsl:value-of select="changefreq" /></td>
						<td ><xsl:value-of select="priority" /></td>
						
			</tr>
		</xsl:for-each>
	</table>
</body>
</html>

</xsl:template>
</xsl:stylesheet>