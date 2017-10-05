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
						border: 1px solid;
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
						width:200px;
						font-size:15px;
					}
					th {
						padding-right:30px;
						font-size:17px;
					}
					
				</style>
</head>
<body>
<h1 align="center">Rss</h1>
	<table border="1" id="sitemap" align="center">
		<tr>
			<th>Title</th>
			<th>Description</th>
			<th>Link</th>
			
		</tr>
		
		<xsl:for-each select="rss/channel/item">
			<tr>
						<td><xsl:value-of select="title"/></td>
							<td><xsl:value-of select="description"/></td>
							<td><xsl:value-of select="link"/></td>
						
			</tr>
		</xsl:for-each>
	</table>
</body>
</html>

</xsl:template>
</xsl:stylesheet>