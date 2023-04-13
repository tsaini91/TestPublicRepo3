var sqlString = "select * from b1permit where serv_prov_code = 'standarddev' and b1_alt_id = '19CAP-00000008'";
var result = aa.db.select(sqlString,null,null);
handleSearchResult(result;